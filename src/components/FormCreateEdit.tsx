import React, { FC } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import FormField from "./FormField";
import styled from "styled-components";
import Button from "./Button";
import { themeBlueLight, themeBlue } from "../styled/themes";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const FormCreateEdit: FC<{}> = () => {
  const teachers = [{ name: "Tom" }, { name: "John" }];
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        teacher: "",
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
            <FormLabel htmlFor="name">name</FormLabel>
            <FormField id="name" name="name" placeholder="name" />
          </FormBlock>

          <FormBlock>
            {teachers.map((teacher) => (
              <>
                <FormRadioButton
                  type="button"
                  theme={
                    values.teacher === teacher.name ? themeBlue : themeBlueLight
                  }
                >
                  <label
                    style={{ display: "block", padding: ".5rem 1rem" }}
                    htmlFor={teacher.name}
                  >
                    {teacher.name}
                  </label>
                </FormRadioButton>

                <Field
                  type="radio"
                  value={teacher.name}
                  name="teacher"
                  id={teacher.name}
                  style={{ display: "none" }}
                ></Field>
              </>
            ))}
          </FormBlock>

          {values.teacher}

          <FormBlock>
            <FormLabel htmlFor="position">position</FormLabel>
            <Field component="select" id="position" name="position">
              <option value="NY">New York</option>
              <option value="SF">San Francisco</option>
              <option value="CH">Chicago</option>
              <option value="OTHER">Other</option>
            </Field>
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="lastName">categorie</FormLabel>
            <FormField id="lastName" name="lastName" placeholder="John" />
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="lastName">technique</FormLabel>
            <FormField id="lastName" name="lastName" placeholder="John" />
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="lastName">steps</FormLabel>
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
      )}
    </Formik>
  );
};

const FormRadioButton = styled(Button)`
  padding: 0;
`;
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
