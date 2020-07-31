import React, { FC } from 'react';
import { MdArchive, MdEdit } from 'react-icons/md';
import styled from 'styled-components';
import { themeBlue } from '../styled/themes';
import Button from './Button';

const TechniqueButtons: FC<{}> = () => {
  return (
    <StyledContainer>
      <Button theme={themeBlue}>
        <MdArchive title="technique-archive"></MdArchive>
      </Button>
      <Button theme={themeBlue}>
        <MdEdit title="technique-edit"></MdEdit>
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-top: 2rem;
  ${Button} {
    margin-right: 1rem;
  }
`;

export default TechniqueButtons;
