import React, { FC } from 'react';
import FormLabel from './FormLabel';
import Select from './Select';

const FormSelect: FC<{ name: string; data: any[] }> = ({ name, data }) => {
  return (
    <>
      <FormLabel htmlFor={name}>{name}</FormLabel>
      <Select name={name} data={data}></Select>
    </>
  );
};

export default FormSelect;
