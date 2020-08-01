import React, { FC } from 'react';
import SearchVideos from '../components/SearchVideos';
import { SearchVideosProps } from '../samples/SearchVideos.sample';
import TemplatePage from '../templates/TemplatePage';

const PageVideos: FC<{}> = () => {
  return (
    <TemplatePage>
      <SearchVideos {...SearchVideosProps} />
    </TemplatePage>
  );
};

export default PageVideos;
