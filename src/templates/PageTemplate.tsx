import React, { Children, FC } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const PageTemplate: FC<{}> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <StyledMain>{children}</StyledMain>
      <footer></footer>
    </>
  );
};

const StyledMain = styled.main``;

export default PageTemplate;
