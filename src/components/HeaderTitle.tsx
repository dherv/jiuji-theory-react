import React, { FC } from 'react';
import styled from 'styled-components';

const HeaderTitle: FC = () => {
  return <StyledTitle>jiuji theory</StyledTitle>;
};

const StyledTitle = styled.h1`
  margin-left: 1rem;
  font-family: 'Saira Stencil One', sans-serif;
  text-transform: capitalize;
`;

export default HeaderTitle;
