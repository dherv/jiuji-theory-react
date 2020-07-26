import { Field } from 'formik';
import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import { themeBlue, themeBlueLight } from '../styled/themes';
import Button from './Button';
import { FormLabel } from './FormCreateEdit';

const FormRadio: FC<{ name: string; data: any[]; selected: string }> = ({
  name,
  data,
  selected,
  ...rest
}) => {
  return (
    <div role="group" aria-labelledby={name}>
      <FormLabel as="div" id={name}>
        {name}
      </FormLabel>
      <FormRadioGroup>
        {data.map((d) => (
          <Fragment key={d.id}>
            <FormRadioButton
              type="button"
              theme={selected === d.name ? themeBlue : themeBlueLight}
            >
              <label
                style={{ display: "block", padding: ".5rem 1rem" }}
                htmlFor={d.name}
              >
                {d.name}
              </label>
            </FormRadioButton>

            <Field
              type="radio"
              value={d.name}
              name={name}
              id={d.name}
              style={{ display: "none" }}
            ></Field>
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
