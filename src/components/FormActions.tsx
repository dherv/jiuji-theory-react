import React, { FC } from 'react';
import styled from 'styled-components';
import { themeBlueLight } from '../styled/themes';
import Button from './Button';

const FormActions: FC<{ className?: string }> = ({ className }) => {
  return (
    <StyledFormActions className={className}>
      <Button type="submit" theme={themeBlueLight}>
        ok
      </Button>
      <Button type="reset" theme={themeBlueLight}>
        cancel
      </Button>
    </StyledFormActions>
  );
};

const StyledFormActions = styled.div`
  display: flex;
  justify-content: center;
  ${Button} {
    margin: 0 1rem;
  }
`;

export default FormActions;
