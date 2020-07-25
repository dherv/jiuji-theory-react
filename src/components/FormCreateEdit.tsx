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
  const positions = [{ name: "attack" }, { name: "defense" }];
  const categories = [{ name: "Triangle" }, { name: "Half Guard" }];
  const techniques = [{ name: "Triangle" }, { name: "Half Guard" }];
  const steps = [{ name: "step1" }, { name: "step2" }, { name: "step3" }];
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        teacher: "",
        position: "",
        categorie: "",
        technique: "",
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
            {positions.map((position) => (
              <>
                <FormRadioButton
                  type="button"
                  theme={
                    values.position === position.name
                      ? themeBlue
                      : themeBlueLight
                  }
                >
                  <label
                    style={{ display: "block", padding: ".5rem 1rem" }}
                    htmlFor={position.name}
                  >
                    {position.name}
                  </label>
                </FormRadioButton>

                <Field
                  type="radio"
                  value={position.name}
                  name="position"
                  id={position.name}
                  style={{ display: "none" }}
                ></Field>
              </>
            ))}
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="category">category</FormLabel>
            <FormSelect
              component="select"
              id="category"
              name="category"
              theme={themeBlueLight}
            >
              {categories.map((category) => (
                <option value={category.name}>{category.name}</option>
              ))}
            </FormSelect>
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="technique">technique</FormLabel>
            <FormSelect
              component="select"
              id="technique"
              name="technique"
              theme={themeBlueLight}
            >
              {techniques.map((technique) => (
                <option value={technique.name}>{technique.name}</option>
              ))}
            </FormSelect>
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="lastName">steps</FormLabel>
            <FormField id="lastName" name="lastName" placeholder="John" />
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

const FormSelect = styled(Field)`
  padding: 0.25rem 1rem;
  border: ${(props) => props.theme.border};

  font-size: 0.75rem;
  /* cancel destyle removal of caret */
  -webkit-appearance: button;
  appearance: button;
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
