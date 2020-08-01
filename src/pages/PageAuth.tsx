import React, { FC } from 'react';
import styled from 'styled-components';
import Auth from '../components/Auth';
import TemplatePage from '../templates/TemplatePage';

const PageAuth: FC<{}> = () => {
  return (
    <TemplatePage>
      <StyledPage>
        <Auth />
      </StyledPage>
    </TemplatePage>
  );
};

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 70, 246, 0.65);
  height: calc(100vh - 50px);
`;

export default PageAuth;
