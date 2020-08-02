import React, { FC } from 'react';
import styled from 'styled-components';
import Auth from '../components/Auth';
import ErrorBoundary from '../components/ErrorBoundary';
import TemplatePage from '../templates/TemplatePage';

const PageAuth: FC<{}> = () => {
  return (
    <ErrorBoundary>
      <TemplatePage>
        <StyledPage>
          <Auth />
        </StyledPage>
      </TemplatePage>
    </ErrorBoundary>
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
