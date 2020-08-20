import { Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
import Api from '../api';
import { themeBlue } from '../styled/themes';
import Button from './Button';
import FormBlock from './FormBlock';
import FormError from './FormError';
import FormField from './FormField';
import FormLabel from './FormLabel';

interface Values {
  name: string;
  email: string;
  password: string;
  verifyPassword: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'too short!')
    .max(50, 'too long!')
    .required('required'),
  password: Yup.string()
    .min(8, 'too short!')
    .max(50, 'too long!')
    .required('password is required'),
  verifyPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords must match')
    .required('password verification is required'),
  email: Yup.string().email('invalid email').required('required'),
});

const AuthRegister: FC = () => {
  const handleSubmit = (values: Values, resetForm: () => void) => {
    return Api.post(`/auth/register`, values)
      .then((response) => {
        localStorage.setItem('token', response.token);
        return resetForm();
      })
      .catch((error) => console.error(error));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (
        values: Values,
        { setSubmitting, resetForm }: FormikHelpers<Values>
      ) => {
        setSubmitting(false);
        const reset = () => resetForm();
        await handleSubmit(values, reset);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <FormBlock>
            <FormLabel htmlFor="name">name</FormLabel>
            <FormField
              type="text"
              id="name"
              name="name"
              error={errors.name}
              touched={touched.name ? touched.name.toString() : undefined}
            />
            {errors.name && touched.name ? (
              <FormError>{errors.name}</FormError>
            ) : null}
          </FormBlock>
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
          <FormBlock>
            <FormLabel htmlFor="verifyPassword">verify password</FormLabel>
            <FormField
              type="password"
              id="verifyPassword"
              name="verifyPassword"
              error={errors.verifyPassword}
              touched={
                touched.verifyPassword
                  ? touched.verifyPassword.toString()
                  : undefined
              }
            />
            {errors.verifyPassword && touched.verifyPassword ? (
              <FormError>{errors.verifyPassword}</FormError>
            ) : null}
          </FormBlock>
          <Button type="submit" theme={themeBlue}>
            register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthRegister;
