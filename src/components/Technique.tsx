import React, { FC } from 'react';
import styled from 'styled-components';
import { TechniqueVideoListProps } from '../samples/TechniqueVideoList.sample';
import { themeBlue } from '../styled/themes';
import { IStep } from '../types/Step.interface';
import TechniqueButtons from './TechniqueButtons';
import TechniqueSteps from './TechniqueSteps';
import TechniqueVideoList from './TechniqueVideoList';

const Technique: FC<{
  id: number;
  name: string;
  teacher: string;
  position: string;
  guard: string;
  submission: string;
  steps: IStep[];
  isSelected: boolean;
  onClick: (id: number) => void;
  onClickArchive: (id: number) => void;
}> = ({
  id,
  name,
  teacher,
  position,
  guard,
  submission,
  steps,
  isSelected,
  onClick,
  onClickArchive,
}) => {
  const handleClick = () => {
    onClick(id);
  };
  const handleClickArchive = (techniqueId: number) =>
    onClickArchive(techniqueId);

  return (
    <>
      <Container theme={isSelected && themeBlue} onClick={handleClick}>
        <h5>{name}</h5>
        <StyledList>
          <StyledItem theme={themeBlue}>{teacher}</StyledItem>
          <StyledItem theme={themeBlue}>{submission}</StyledItem>
          <StyledItem theme={themeBlue}>{guard}</StyledItem>
          <StyledItem theme={themeBlue}>{position}</StyledItem>
        </StyledList>
      </Container>
      {isSelected && (
        <Content>
          <TechniqueSteps steps={steps} />
          <TechniqueVideoList {...TechniqueVideoListProps} />
          <TechniqueButtons id={id} onClick={handleClickArchive} />
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
  border-top: 1px solid rgba(18, 70, 246, 0.1);
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
