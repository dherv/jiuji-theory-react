import React, { FC, useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import Api from '../api';
import ErrorBoundary from '../components/ErrorBoundary';
import Technique from '../components/Technique';
import TemplatePage from '../templates/TemplatePage';
import { ITechnique } from '../types/Technique.interface';
import { ITechniqueNote } from '../types/TechniqueNote.interface';

const initialTechniques: { techniques: ITechniqueNote[] } = { techniques: [] };

const fetchTechniques = (signal: AbortSignal) => {
  return Api.get('/techniques', signal);
};

const deleteTechnique = (id: number) => {
  return Api.delete(`/techniques/${id}`);
};

const reducer = (
  state: { techniques: ITechniqueNote[] },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'fetchAll':
      return { techniques: action.payload };
    case 'delete': {
      return {
        ...state,
        techniques: state.techniques.filter(
          (technique) => technique.id !== action.payload.id
        ),
      };
    }
    default:
      throw new Error();
  }
};

const PageHome: FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [state, dispatch] = useReducer(reducer, initialTechniques);

  const handleClick = (id: number) => {
    setSelectedId((prev) => {
      if (prev === id) return null;
      return id;
    });
  };

  const handleClickArchive = (id: number) => {
    deleteTechnique(id).then(({ technique }) =>
      dispatch({ type: 'delete', payload: technique })
    );
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchTechniques(abortController.signal).then((response) => {
      const techniqueToNotes = response.techniques.map(
        (technique: ITechnique) => {
          const { teacher, guard, submission, position } = technique;
          return {
            ...technique,
            teacher: teacher.name,
            guard: guard.name,
            submission: submission.name,
            position: position.name.toLowerCase(),
          };
        }
      );
      dispatch({ type: 'fetchAll', payload: techniqueToNotes });
    });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <ErrorBoundary>
      <TemplatePage>
        <List>
          {state.techniques.map((technique: ITechniqueNote) => (
            <li key={technique.id}>
              <Technique
                {...technique}
                onClick={handleClick}
                onClickArchive={handleClickArchive}
                isSelected={selectedId === technique.id}
              />
            </li>
          ))}
        </List>
      </TemplatePage>
    </ErrorBoundary>
  );
};

const List = styled.ul`
  max-width: 440px;
  border: 1px solid rgba(18, 70, 246, 0.1);
`;

export default PageHome;
