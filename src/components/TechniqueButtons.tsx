import React, { FC, useContext, useEffect } from 'react';
import { MdArchive, MdEdit } from 'react-icons/md';
import styled from 'styled-components';
import { themeBlue } from '../styled/themes';
import Button from './Button';

const TechniqueButtons: FC<{ id: number; onClick: (id: number) => void }> = ({
  id,
  onClick,
}) => {
  return (
    <StyledContainer>
      <Button theme={themeBlue} onClick={() => onClick(id)}>
        <MdArchive title="technique-archive" />
      </Button>
      <Button theme={themeBlue}>
        <MdEdit title="technique-edit" />
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
