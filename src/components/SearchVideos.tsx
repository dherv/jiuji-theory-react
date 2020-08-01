import { Formik } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { SearchVideoListProps } from '../samples/SearchVideoList.sample';
import Search from './Search';
import SearchVideoList from './SearchVideoList';

const SearchVideos: FC<{}> = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={() => {}}
      >
        <StyledSearch></StyledSearch>
      </Formik>
      <SearchVideoList
        videos={SearchVideoListProps.videos}
        onClick={handleClick}
        selected={false}
      ></SearchVideoList>
    </>
  );
};

const StyledSearch = styled(Search)`
  margin-bottom: 1rem;
`;

export default SearchVideos;
