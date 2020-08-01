import { Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { themeBlue } from '../styled/themes';
import Button from './Button';
import FormBlock from './FormBlock';
import FormField from './FormField';
import FormLabel from './FormLabel';

interface Values {
  email: string;
  password: string;
}

const AuthLogin: FC<{}> = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values }) => (
        <Form>
          <FormBlock>
            <FormLabel htmlFor="email">email</FormLabel>
            <FormField type="email" id="email" name="email" />
          </FormBlock>
          <FormBlock>
            <FormLabel htmlFor="password">password</FormLabel>
            <FormField type="password" id="password" name="password" />
          </FormBlock>
          <Button theme={themeBlue}>login</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthLogin;
