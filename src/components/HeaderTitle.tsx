import React, { FC } from 'react';
import styled from 'styled-components';

const HeaderTitle: FC<{}> = () => {
  return <Title>jiuji theory</Title>;
};

const Title = styled.h1`
  font-family: "Saira Stencil One", sans-serif;
  text-transform: capitalize;
`;

export default HeaderTitle;
