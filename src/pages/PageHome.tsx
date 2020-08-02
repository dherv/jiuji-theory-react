import React, { FC } from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../components/ErrorBoundary';
import Technique from '../components/Technique';
import TemplatePage from '../templates/TemplatePage';
import { ITechniqueNote } from '../types/TechniqueNote.interface';

const PageHome: FC<{ techniques: ITechniqueNote[] }> = ({ techniques }) => {
  const handleClick = () => {};
  return (
    <ErrorBoundary>
      <TemplatePage>
        <List>
          {techniques.map((technique: ITechniqueNote) => (
            <li key={technique.id}>
              <Technique {...technique} onClick={handleClick} />
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
