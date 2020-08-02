import React, { FC } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const TemplatePage: FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <footer />
    </>
  );
};

const StyledMain = styled.main``;

export default TemplatePage;
