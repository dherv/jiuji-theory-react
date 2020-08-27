import React, { FC } from 'react';
import styled from 'styled-components';
import { IStep } from '../types/Step.interface';

const TechniqueSteps: FC<{ steps: IStep[] }> = ({ steps }) => {
  return (
    <ul>
      {steps.map((step, index) => (
        <TechniqueStep key={index}>{step.text}</TechniqueStep>
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
