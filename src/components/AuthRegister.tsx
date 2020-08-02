import { Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { themeBlue } from '../styled/themes';
import Button from './Button';
import FormBlock from './FormBlock';
import FormField from './FormField';
import FormLabel from './FormLabel';

interface Values {
  name: string;
  email: string;
  password: string;
  verifyPassword: string;
}

const AuthRegister: FC = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 200);
      }}
    >
      {() => (
        <Form>
          <FormBlock>
            <FormLabel htmlFor="name">name</FormLabel>
            <FormField type="text" id="name" name="name" />
          </FormBlock>
          <FormBlock>
            <FormLabel htmlFor="email">email</FormLabel>
            <FormField type="email" id="email" name="email" />
          </FormBlock>
          <FormBlock>
            <FormLabel htmlFor="password">password</FormLabel>
            <FormField type="password" id="password" name="password" />
          </FormBlock>
          <FormBlock>
            <FormLabel htmlFor="verifyPassword">verify password</FormLabel>
            <FormField
              type="password"
              id="verifyPassword"
              name="verifyPassword"
            />
          </FormBlock>
          <Button theme={themeBlue}>register</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthRegister;
