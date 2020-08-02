import React, { FC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themeWhite } from '../styled/themes';
import AuthLogin from './AuthLogin';
import AuthRegister from './AuthRegister';
import Button from './Button';

const Auth: FC = () => {
  const [register, setRegister] = useState<boolean>(false);

  const handleClick = () => {
    setRegister((prevRegister) => !prevRegister);
  };

  const AuthForm = register ? <AuthRegister /> : <AuthLogin />;
  const title = register ? 'register' : 'login';
  const switchButtonText = register ? 'login' : 'register';

  return (
    <StyledAuth>
      <StyledHeading as="h2">{title}</StyledHeading>
      <StyledContent>{AuthForm}</StyledContent>
      <ThemeProvider theme={themeWhite}>
        <Button onClick={handleClick}>{switchButtonText}</Button>
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

export default Auth;
