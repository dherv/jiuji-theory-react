import React, { FC, useState } from 'react';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
import { themeBlueHeader } from '../styled/themes';
import HeaderNav from './HeaderNav';
import HeaderTitle from './HeaderTitle';

const Header: FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const handleClick = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };
  return (
    <>
      <StyledHeader theme={themeBlueHeader}>
        <HeaderTitle />
        <StyledIcon onClick={handleClick}>
          <MdMenu title="menu-icon" />
        </StyledIcon>
      </StyledHeader>
      {showNav && <HeaderNav />}
    </>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const StyledIcon = styled.div`
  padding: 1rem;
  cursor: pointer;
`;
export default Header;
