import React, { FC } from 'react';
import FormCreateEdit from '../components/FormCreateEdit';
import { FormCreateEditProps as props } from '../samples/FormCreateEdit.sample';
import PageTemplate from '../templates/PageTemplate';

const PageCreateEdit: FC<{}> = () => {
  return (
    <PageTemplate>
      <FormCreateEdit {...props} />
    </PageTemplate>
  );
};

export default PageCreateEdit;
