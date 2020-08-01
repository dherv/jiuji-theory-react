import { Field } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { themeBlue } from '../styled/themes';

const Select: FC<{
  name: string;
  data: any[];
}> = ({ name, data }) => {
  return (
    <StyledSelect id={name} name={name} theme={themeBlue} component="select">
      {data.map((d: any) => (
        <option key={d.id} value={d.name}>
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

export default Select;
