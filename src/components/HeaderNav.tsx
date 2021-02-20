import React, { FC } from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const HeaderNav: FC = () => {
  return (
    <StyledNav>
      <ul>
        <StyledLink to="/">list</StyledLink>
        <StyledLink to="/videos">videos</StyledLink>
        <StyledLink to="/create">create</StyledLink>
        <StyledLink to="/account">account</StyledLink>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: absolute;
  right: 0;
  width: 150px;
  font-weight: 300;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const StyledLink = styled(NavLink)`
  display: block;
  padding: 0.5rem;
  border-bottom: 0.5px solid #dcdcdc;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
`;

export default HeaderNav;
