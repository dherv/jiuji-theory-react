import { Formik } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { SearchVideoListProps } from '../samples/SearchVideoList.sample';
import Search from './FormSearch';
import SearchVideoList from './SearchVideoList';

const SearchVideos: FC = () => {
  const handleClick = () => {};
  return (
    <StyledSearchVideos>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={() => {}}
      >
        <StyledSearch />
      </Formik>
      <SearchVideoList
        videos={SearchVideoListProps.videos}
        onClick={handleClick}
        selected={false}
      />
    </StyledSearchVideos>
  );
};

const StyledSearchVideos = styled.div`
  padding: 1rem;
`;
const StyledSearch = styled(Search)`
  margin-bottom: 1rem;
`;

export default SearchVideos;
