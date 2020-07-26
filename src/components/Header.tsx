import React, { FC } from 'react';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
import { themeBlueHeader } from '../styled/themes';
import HeaderNav from './HeaderNav';
import HeaderTitle from './HeaderTitle';

const Header: FC<{}> = () => {
  return (
    <>
      <StyledHeader theme={themeBlueHeader}>
        <HeaderTitle />
        <IconContext.Provider value={{ title: "menu-icon" } as any}>
          <MdMenu title="menu-icon" />
        </IconContext.Provider>
      </StyledHeader>
      <HeaderNav />
    </>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

export default Header;
