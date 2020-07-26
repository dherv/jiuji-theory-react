import React, { FC } from 'react';
import styled from 'styled-components';
import { themeBlueHeader } from '../styled/themes';
import HeaderTitle from './HeaderTitle';

const Header: FC<{}> = () => {
  return (
    <StyledHeader theme={themeBlueHeader}>
      <HeaderTitle />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1rem;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

export default Header;
