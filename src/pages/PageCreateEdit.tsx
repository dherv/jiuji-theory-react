import React, { FC } from 'react';
import CreateEditForm from '../components/CreateEditForm';
import { CreateEditFormProps as props } from '../samples/CreateEditForm.sample';
import TemplatePage from '../templates/TemplatePage';

const PageCreateEdit: FC<{}> = () => {
  return (
    <TemplatePage>
      <CreateEditForm {...props} />
    </TemplatePage>
  );
};

export default PageCreateEdit;
