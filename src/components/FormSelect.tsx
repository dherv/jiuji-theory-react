import { Field } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { themeBlue } from '../styled/themes';
import { IPosition } from '../types/Position.interface';
import { ISubmission } from '../types/Submission.interface';

type Data = IPosition | ISubmission;
const FormSelect: FC<{
  name: string;
  data: Data[];
}> = ({ name, data }) => {
  return (
    <StyledSelect id={name} name={name} theme={themeBlue} component="select">
      <option disabled value="">
        select an option
      </option>
      {data.map((d: Data) => (
        <option key={d.id} value={d.id}>
          {d.name}
        </option>
      ))}
    </StyledSelect>
  );
};
const StyledSelect = styled(Field)`
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(18, 70, 246, 0.1);
  font-size: 0.75rem;
  /* cancel destyle removal of caret */
  -webkit-appearance: button;
  appearance: button;
`;

export default FormSelect;
