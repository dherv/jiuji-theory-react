import styled from "styled-components";
import { themeBlueInput } from "../styled/themes";

const Input = styled.input`
  padding: 0.25rem 1rem;
  border: ${(props) => props.theme.border};
  font-weight: 500;
  font-size: 12px;
`;

Input.defaultProps = {
  theme: themeBlueInput,
};

export default Input;
