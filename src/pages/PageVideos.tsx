import React, { FC } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchVideos from '../components/SearchVideos';
import { SearchVideosProps } from '../samples/SearchVideos.sample';
import TemplatePage from '../templates/TemplatePage';

const PageVideos: FC = () => {
  return (
    <ErrorBoundary>
      <TemplatePage>
        <SearchVideos {...SearchVideosProps} />
      </TemplatePage>
    </ErrorBoundary>
  );
};

export default PageVideos;
