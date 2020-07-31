import React, { FC } from 'react';
import styled from 'styled-components';

const TechniqueSteps: FC<{ steps: string[] }> = ({ steps }) => {
  return (
    <ul>
      {steps.map((step, index) => (
        <TechniqueStep key={index}>{step}</TechniqueStep>
      ))}
    </ul>
  );
};

const TechniqueStep = styled.li`
  margin: 1rem 0;
  font-size: 0.75rem;
  font-weight: 600;
`;

export default TechniqueSteps;
