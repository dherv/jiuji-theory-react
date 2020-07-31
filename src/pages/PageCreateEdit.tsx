import React, { FC } from 'react';
import FormCreateEdit from '../components/FormCreateEdit';
import { FormCreateEditProps as props } from '../samples/FormCreateEdit.sample';
import TemplatePage from '../templates/TemplatePage';

const PageCreateEdit: FC<{}> = () => {
  return (
    <TemplatePage>
      <FormCreateEdit {...props} />
    </TemplatePage>
  );
};

export default PageCreateEdit;
