import React, { FC } from 'react';
import AccountForm from '../components/AccountForm';
import ErrorBoundary from '../components/ErrorBoundary';
import { AccountFormProps } from '../samples/AccountForm.sample';
import TemplatePage from '../templates/TemplatePage';

const PageAccount: FC = () => {
  return (
    <ErrorBoundary>
      <TemplatePage>
        <AccountForm {...AccountFormProps} />
      </TemplatePage>
    </ErrorBoundary>
  );
};

export default PageAccount;
