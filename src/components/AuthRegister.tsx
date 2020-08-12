import { Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
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
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required'),
  verifyPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Password verification is required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const AuthRegister: FC = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 200);
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
