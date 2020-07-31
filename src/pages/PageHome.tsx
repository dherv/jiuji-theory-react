import React, { FC } from 'react';
import styled from 'styled-components';
import Technique from '../components/Technique';
import PageTemplate from '../templates/PageTemplate';

const PageHome: FC<{ techniques: any }> = ({ techniques }) => {
  return (
    <PageTemplate>
      <StyledList>
        {techniques.map((technique: any) => (
          <li key={technique.id}>
            <Technique {...technique} />
          </li>
        ))}
      </StyledList>
    </PageTemplate>
  );
};

const StyledList = styled.ul`
  max-width: 440px;
  border: 1px solid rgba(18, 70, 246, 0.1);
`;

export default PageHome;
