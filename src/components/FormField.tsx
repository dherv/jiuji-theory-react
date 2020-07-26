import { Field } from 'formik';
import styled from 'styled-components';
import { themeBlueField } from '../styled/themes';

const FormField = styled(Field)`
  padding: 0.5rem;
  border: ${(props) => props.theme.border};
  font-weight: 500;
  font-size: 12px;
`;

FormField.defaultProps = {
  theme: themeBlueField,
};

export default FormField;
