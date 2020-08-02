import React, { FC } from 'react';
import CreateEditForm from '../components/CreateEditForm';
import ErrorBoundary from '../components/ErrorBoundary';
import { CreateEditFormProps as props } from '../samples/CreateEditForm.sample';
import TemplatePage from '../templates/TemplatePage';

const PageCreateEdit: FC = () => {
  return (
    <ErrorBoundary>
      <TemplatePage>
        <CreateEditForm {...props} />
      </TemplatePage>
    </ErrorBoundary>
  );
};

export default PageCreateEdit;
