import React, { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import FormField from "./FormField";
import styled from "styled-components";
import Button from "./Button";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const FormCreateEdit: FC<{}> = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 200);
      }}
    >
      <Form>
        <FormBlock>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <FormField id="firstName" name="firstName" placeholder="John" />
        </FormBlock>

        <FormBlock>
          <FormLabel htmlFor="lastName">Last Name Name</FormLabel>
          <FormField id="lastName" name="lastName" placeholder="John" />
        </FormBlock>

        <FormBlock>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormField
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
        </FormBlock>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-weight: bold;
  font-size: 0.75rem;
`;
const FormBlock = styled.div`
  display: block;
  margin-bottom: 1rem;
`;
export default FormCreateEdit;
