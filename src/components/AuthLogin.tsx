import { Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Api from '../api';
import { themeBlue } from '../styled/themes';
import Button from './Button';
import FormBlock from './FormBlock';
import FormError from './FormError';
import FormField from './FormField';
import FormLabel from './FormLabel';

interface Values {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('invalid email').required('required'),
  password: Yup.string()
    .min(8, 'too short!')
    .max(50, 'too long!')
    .required('password is required'),
});

const AuthLogin: FC = () => {
  const history = useHistory();

  const handleSubmit = (values: Values) => Api.post(`/auth/login`, values);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (
        values: Values,
        { setSubmitting, resetForm }: FormikHelpers<Values>
      ) => {
        setSubmitting(true);
        const { token } = await handleSubmit(values);
        localStorage.setItem('token', token);
        history.push('/');
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormBlock>
            <FormLabel htmlFor="email">email</FormLabel>
            <FormField
              type="email"
              id="email"
              name="email"
              error={errors.email}
              touched={touched.email ? touched.email.toString() : undefined}
            />
            {errors.email && touched.email ? (
              <FormError>{errors.email}</FormError>
            ) : null}
          </FormBlock>
          <FormBlock>
            <FormLabel htmlFor="password">password</FormLabel>
            <FormField
              type="password"
              id="password"
              name="password"
              error={errors.password}
              touched={
                touched.password ? touched.password.toString() : undefined
              }
            />
            {errors.password && touched.password ? (
              <FormError>{errors.password}</FormError>
            ) : null}
          </FormBlock>
          <Button type="submit" theme={themeBlue}>
            login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthLogin;
