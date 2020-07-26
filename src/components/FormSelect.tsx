import React, { FC } from "react";
import { FormLabel } from "./FormCreateEdit";
import { themeBlue } from "../styled/themes";
import styled from "styled-components";
import { Field } from "formik";

const FormSelect: FC<{ name: string; data: any[] }> = ({ name, data }) => {
  return (
    <>
      <FormLabel htmlFor={name}>{name}</FormLabel>
      <StyledSelect component="select" id={name} name={name} theme={themeBlue}>
        {data.map((d: any) => (
          <option key={d.id} value={d.name}>
            {d.name}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

const StyledSelect = styled(Field)`
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(18, 70, 246, 0.1);
  font-size: 0.75rem;
  /* cancel destyle removal of caret */
  -webkit-appearance: button;
  appearance: button;
`;

export default FormSelect;
