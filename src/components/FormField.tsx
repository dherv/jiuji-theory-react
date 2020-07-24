import styled from "styled-components";
import { themeBlueField } from "../styled/themes";
import { Field } from "formik";

const FormField = styled(Field)`
  padding: 0.25rem 1rem;
  border: ${(props) => props.theme.border};
  font-weight: 500;
  font-size: 12px;
`;

FormField.defaultProps = {
  theme: themeBlueField,
};

export default FormField;
