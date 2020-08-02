import { Form } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';

const TemplateForm: FC = ({ children }) => {
  return (
    <FormContainer>
      <Form>{children}</Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 1rem;
`;

export default TemplateForm;
