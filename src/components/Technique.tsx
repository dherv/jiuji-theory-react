import React, { FC } from 'react';
import styled from 'styled-components';
import { TechniqueStepsProps } from '../samples/TechniqueSteps.sample';
import { TechniqueVideoListProps } from '../samples/TechniqueVideoList.sample';
import { themeBlue } from '../styled/themes';
import TechniqueButtons from './TechniqueButtons';
import TechniqueSteps from './TechniqueSteps';
import TechniqueVideoList from './TechniqueVideoList';

const Technique: FC<{
  name: string;
  teacher: string;
  position: string;
  technique: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ name, teacher, position, technique, selected, onClick }) => {
  return (
    <>
      <Container theme={selected && themeBlue} onClick={onClick}>
        <h5>{name}</h5>
        <StyledList>
          <StyledItem theme={themeBlue}>{teacher}</StyledItem>
          <StyledItem theme={themeBlue}>{technique}</StyledItem>
          <StyledItem theme={themeBlue}>{position}</StyledItem>
        </StyledList>
      </Container>
      {selected && (
        <Content>
          <TechniqueSteps {...TechniqueStepsProps}></TechniqueSteps>
          <TechniqueVideoList {...TechniqueVideoListProps}></TechniqueVideoList>
          <TechniqueButtons />
        </Content>
      )}
    </>
  );
};

const Container = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.backgroundColor};
  font-weight: 600;
  font-size: 0.75rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(18, 70, 246, 0.1);
`;

const Content = styled.div`
  padding: 1rem 1rem 0 1rem;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.color};
  margin-top: 1rem;
`;

const StyledItem = styled.li`
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

export default Technique;
