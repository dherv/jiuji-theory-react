import React, { FC } from 'react';
import styled from 'styled-components';
import Technique from '../components/Technique';
import TemplatePage from '../templates/TemplatePage';

const PageHome: FC<{ techniques: any }> = ({ techniques }) => {
  return (
    <TemplatePage>
      <List>
        {techniques.map((technique: any) => (
          <li key={technique.id}>
            <Technique {...technique} />
          </li>
        ))}
      </List>
    </TemplatePage>
  );
};

const List = styled.ul`
  max-width: 440px;
  border: 1px solid rgba(18, 70, 246, 0.1);
`;

export default PageHome;