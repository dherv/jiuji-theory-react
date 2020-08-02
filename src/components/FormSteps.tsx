import { Field, FieldArray } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { themeBlue } from '../styled/themes';
import Button from './Button';
import FormLabel from './FormLabel';

const FormSteps: FC<{
  values: { steps: { name: string }[] };
}> = ({ values }) => {
  return (
    <>
      <FormLabel as="div">steps</FormLabel>
      <FieldArray name="steps">
        {({ remove, push }) => (
          <div>
            {values.steps.length > 0 &&
              values.steps.map((step: any, index: number) => (
                <FormStep key={step}>
                  <FormStepField
                    name={`steps.${index}.name`}
                    placeholder="enter a step"
                    type="text"
                    maxLength="100"
                    value={step.name}
                  />
                  <div>
                    <Button
                      type="button"
                      theme={themeBlue}
                      onClick={() => remove(index)}
                    >
                      x
                    </Button>
                  </div>
                </FormStep>
              ))}
            <Button
              type="button"
              theme={themeBlue}
              onClick={() => push({ name: '' })}
            >
              +
            </Button>
          </div>
        )}
      </FieldArray>
    </>
  );
};

const FormStepField = styled(Field)`
  width: 100%;
  padding: 0 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--color);
  font-size: 0.75rem;
  font-weight: 400;
  &::placeholder {
    color: #767676;
  }
`;

const FormStep = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: rgba(18, 70, 246, 1);
  background-color: rgba(18, 70, 246, 0.05);
  font-weight: 500;
  ${Button} {
    background-color: rgba(18, 70, 246, 0.05);
  }
`;

export default FormSteps;
