import { Field, FieldArray } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { themeBlue } from '../styled/themes';
import { IStep } from '../types/Step.interface';
import Button from './Button';
import FormLabel from './FormLabel';

const FormSteps: FC<{
  values: { steps: { text: string; order: number }[] };
}> = ({ values }) => {
  return (
    <>
      <FormLabel as="div">steps</FormLabel>
      <FieldArray name="steps">
        {({ remove, push }) => (
          <div>
            {values.steps.length > 0 &&
              values.steps.map((step: IStep, index: number) => (
                <FormStep key={index}>
                  <FormStepField
                    name={`steps.${index}.text`}
                    placeholder="enter a step"
                    type="text"
                    maxLength="100"
                    value={step.text}
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
              onClick={() => push({ text: '', order: values.steps.length + 1 })}
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
