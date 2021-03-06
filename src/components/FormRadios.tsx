import { Field } from 'formik';
import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import { themeBlue, themeBlueLight } from '../styled/themes';
import { IGuard } from '../types/Guard.interface';
import { ITeacher } from '../types/Teacher.interface';
import Button from './Button';
import FormLabel from './FormLabel';

type Data = ITeacher | IGuard;
const FormRadio: FC<{
  name: string;
  data: Data[];
  selected: string;
}> = ({ name, data, selected }) => {
  return (
    <div role="group" aria-labelledby={name}>
      <FormLabel as="div" id={name}>
        {name}
      </FormLabel>
      <FormRadioGroup>
        {data.map((d: Data) => (
          <Fragment key={d.id + d.name}>
            <FormRadioButton
              type="button"
              theme={Number(selected) === d.id ? themeBlue : themeBlueLight}
            >
              <label
                style={{ display: 'block', padding: '.5rem 1rem' }}
                htmlFor={`${d.id}_${d.name}`}
              >
                {d.name}
              </label>
            </FormRadioButton>

            <Field
              type="radio"
              value={d.id}
              name={name}
              id={`${d.id}_${d.name}`}
              style={{ display: 'none' }}
            />
          </Fragment>
        ))}
      </FormRadioGroup>
    </div>
  );
};

const FormRadioButton = styled(Button)`
  padding: 0;
  margin-right: 1rem;
`;

const FormRadioGroup = styled.div`
  display: flex;
`;

export default FormRadio;
