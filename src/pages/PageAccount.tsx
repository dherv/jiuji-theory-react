import React, { FC } from 'react';
import AccountForm from '../components/AccountForm';
import { AccountFormProps } from '../samples/AccountForm.sample';
import TemplatePage from '../templates/TemplatePage';

const PageAccount: FC<{}> = () => {
  return (
    <TemplatePage>
      <AccountForm {...AccountFormProps} />
    </TemplatePage>
  );
};

export default PageAccount;
