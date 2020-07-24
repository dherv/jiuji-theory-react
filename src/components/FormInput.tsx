import React, { FC } from "react";
import Label from "./Label";
import Input from "./Input";
import styled from "styled-components";

const FormInput: FC<{ label: string }> = ({ label }) => {
  return (
    <>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Input id={label} placeholder={label}></Input>
    </>
  );
};

const FormLabel = styled(Label)`
  display: block;
  margin-bottom: 0.75rem;
`;
export default FormInput;
