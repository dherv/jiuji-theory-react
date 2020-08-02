import React, { FC } from 'react';
import styled from 'styled-components';

const TechniqueSteps: FC<{ steps: string[] }> = ({ steps }) => {
  return (
    <ul>
      {steps.map((step) => (
        <TechniqueStep key={step}>{step}</TechniqueStep>
      ))}
    </ul>
  );
};

const TechniqueStep = styled.li`
  margin-bottom: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
`;

export default TechniqueSteps;
