import styled from 'styled-components';
import { themeBlue } from '../styled/themes';

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  border: ${(props) => props.theme.border};
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.hoverBackgroundColor};
    border: ${(props) => props.theme.hoverBorder};
  }
`;

Button.defaultProps = {
  theme: themeBlue,
};

export default Button;
