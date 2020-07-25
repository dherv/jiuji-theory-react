import React, { FC, Fragment } from "react";
import {
  Formik,
  Field,
  Form,
  FormikHelpers,
  FieldArray,
  ErrorMessage,
} from "formik";
import FormField from "./FormField";
import styled from "styled-components";
import Button from "./Button";
import { themeBlueLight, themeBlue } from "../styled/themes";

interface Values {
  name: string;
  teacher: string;
  position: string;
  category: string;
  technique: string;
  steps: never[];
}

const FormCreateEdit: FC<{}> = () => {
  const teachers = [
    { id: 1, name: "Tom" },
    { id: 2, name: "John" },
  ];
  const positions = [
    { id: 1, name: "attack" },
    { id: 2, name: "defense" },
  ];
  const categories = [
    { id: 1, name: "Triangle" },
    { id: 2, name: "Half Guard" },
  ];
  const techniques = [
    { id: 1, name: "Triangle" },
    { id: 2, name: "Half Guard" },
  ];
  return (
    <Formik
      initialValues={{
        name: "",
        teacher: "",
        position: "",
        category: "",
        technique: "",
        steps: [],
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values }) => (
        <FormContainer>
          <Form>
            <FormBlock>
              <FormLabel htmlFor="name">name</FormLabel>
              <FormField id="name" name="name" placeholder="name" />
            </FormBlock>
            <FormBlock>
              <FormLabel htmlFor="teacher">teacher</FormLabel>

              <FormRadioGroup>
                {teachers.map((teacher) => (
                  <Fragment key={teacher.id}>
                    <FormRadioButton
                      type="button"
                      theme={
                        values.teacher === teacher.name
                          ? themeBlue
                          : themeBlueLight
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
                  </Fragment>
                ))}
              </FormRadioGroup>
            </FormBlock>
            <FormBlock>
              <FormLabel htmlFor="position">position</FormLabel>

              <FormRadioGroup>
                {positions.map((position) => (
                  <Fragment key={position.id}>
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
                  </Fragment>
                ))}
              </FormRadioGroup>
            </FormBlock>
            <FormBlock>
              <FormLabel htmlFor="category">category</FormLabel>
              <FormSelect
                component="select"
                id="category"
                name="category"
                theme={themeBlue}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </FormSelect>
            </FormBlock>

            <FormBlock>
              <FormLabel htmlFor="technique">technique</FormLabel>
              <FormSelect
                component="select"
                id="technique"
                name="technique"
                theme={themeBlue}
              >
                {techniques.map((technique) => (
                  <option key={technique.id} value={technique.name}>
                    {technique.name}
                  </option>
                ))}
              </FormSelect>
            </FormBlock>

            <FormBlock>
              <FormLabel htmlFor="lastName">steps</FormLabel>
              <FieldArray name="steps">
                {({ insert, remove, push }) => (
                  <div>
                    {values.steps.length > 0 &&
                      values.steps.map((step, index) => (
                        <FormStep key={index}>
                          <FormStepField
                            name={`steps.${index}.name`}
                            placeholder="enter a step"
                            type="text"
                            maxLength="100"
                          />
                          <ErrorMessage
                            name={`steps.${index}.name`}
                            component="div"
                            className="field-error"
                          />

                          <div>
                            <Button
                              type="button"
                              theme={themeBlue}
                              onClick={() => remove(index)}
                            >
                              x
                            </Button>
                          </div>
                        </FormStep>
                      ))}
                    <Button
                      type="button"
                      className="secondary"
                      theme={themeBlue}
                      onClick={() => push({ name: "" })}
                    >
                      +
                    </Button>
                  </div>
                )}
              </FieldArray>
            </FormBlock>

            <FormActions>
              <Button type="submit" theme={themeBlueLight}>
                OK
              </Button>
              <Button type="reset" theme={themeBlueLight}>
                Cancel
              </Button>
            </FormActions>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

const FormContainer = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 1rem;
`;

const FormStepField = styled(Field)`
  width: 100%;
  padding: 0 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--color);
  font-size: 0.75rem;
  font-weight: 400;
  &::placeholder {
    color: #767676;
  }
`;

const FormStep = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: rgba(18, 70, 246, 1);
  background-color: rgba(18, 70, 246, 0.05);
  font-weight: 500;
  ${Button} {
    background-color: rgba(18, 70, 246, 0.05);
  }
`;

const FormRadioButton = styled(Button)`
  padding: 0;
  margin-right: 1rem;
`;

const FormSelect = styled(Field)`
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(18, 70, 246, 0.1);
  font-size: 0.75rem;
  /* cancel destyle removal of caret */
  -webkit-appearance: button;
  appearance: button;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 0.75rem;
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const FormRadioGroup = styled.div`
  display: flex;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: center;
  ${Button} {
    margin: 0 1rem;
  }
`;
export default FormCreateEdit;
