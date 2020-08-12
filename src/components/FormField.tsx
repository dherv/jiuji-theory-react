import { Field } from 'formik';
import styled from 'styled-components';
import { themeBlueField } from '../styled/themes';

const FormField = styled(Field)`
  padding: 0.5rem;
  font-weight: 500;
  font-size: 12px;
  border: ${(props) => {
    if (props.error && props.touched) return '1px solid #ff867c';
    if (props.touched) return '1px solid #98ee99';
    return props.theme.border;
  }};
`;

FormField.defaultProps = {
  theme: themeBlueField,
};

export default FormField;
