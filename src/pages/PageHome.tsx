import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Api from '../api';
import ErrorBoundary from '../components/ErrorBoundary';
import Technique from '../components/Technique';
import TemplatePage from '../templates/TemplatePage';
import { ITechnique } from '../types/Technique.interface';
import { ITechniqueNote } from '../types/TechniqueNote.interface';

function useSelected(id: number | null, collection: any[]): boolean {
  const [selected, setSelected] = useState<boolean>(false);
  useEffect(() => {
    setSelected(collection.some((item) => item.id === id));
  }, [id, collection]);
  return selected;
}

const PageHome: FC = () => {
  const [techniques, setTechniques] = useState<ITechniqueNote[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isSelected = useSelected(selectedId, techniques);

  const handleClick = (id: number) => {
    setSelectedId((prev) => {
      if (prev === id) return null;
      return id;
    });
  };

  const fetchTechniques = (signal: AbortSignal) => {
    return Api.get('/techniques', signal);
  };
  useEffect(() => {
    const abortController = new AbortController();
    fetchTechniques(abortController.signal).then((response) => {
      const techniqueToNotes = response.techniques.map(
        ({
          id,
          name,
          teacher,
          guard,
          submission,
          position,
          steps,
        }: ITechnique) => {
          return {
            id,
            name,
            teacher: teacher.name,
            guard: guard.name,
            submission: submission.name,
            position: position.name.toLowerCase(),
            steps,
          };
        }
      );
      setTechniques(techniqueToNotes);
    });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <ErrorBoundary>
      <TemplatePage>
        <List>
          {techniques.map((technique: ITechniqueNote) => (
            <li key={technique.id}>
              <Technique
                {...technique}
                onClick={handleClick}
                selected={isSelected}
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
