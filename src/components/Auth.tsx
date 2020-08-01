import React, { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import AuthLogin from '../components/AuthLogin';
import AuthRegister from '../components/AuthRegister';
import Button from '../components/Button';
import { themeWhite } from '../styled/themes';

const Auth: FC<{}> = ({}) => {
  const [register, setRegister] = useState<boolean>(false);
  const AuthForm = register ? <AuthRegister /> : <AuthLogin />;
  const Title = register ? "register" : "login";
  return (
    <StyledAuth>
      <StyledHeading as="h2">{Title}</StyledHeading>
      <StyledContent>{AuthForm}</StyledContent>
      <ThemeProvider theme={themeWhite}>
        <StyledButton>register</StyledButton>
      </ThemeProvider>
    </StyledAuth>
  );
};

const StyledAuth = styled.div`
  padding: 1rem;
  width: 300px;
`;
const StyledHeading = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
`;
const StyledContent = styled.div`
  background-color: #fff;
  margin: 1rem 0;
  padding: 1rem;
`;
const StyledButton = styled(Button)`
  margin: 0 auto;
`;

export default Auth;
