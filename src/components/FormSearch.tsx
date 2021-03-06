import React, { FC } from 'react';
import styled from 'styled-components';
import FormField from './FormField';
import FormLabel from './FormLabel';

const FormSearch: FC<{ className?: string }> = ({ className }) => {
  return (
    <StyledSearch className={className}>
      <FormLabel htmlFor="search">search</FormLabel>
      <StyledFormField id="search" name="search" placeholder="search" />
    </StyledSearch>
  );
};

const StyledSearch = styled.div``;
const StyledFormField = styled(FormField)`
  width: 100%;
`;

export default FormSearch;
