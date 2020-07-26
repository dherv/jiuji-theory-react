import React, { FC } from "react";
import { Formik, Field, Form, FormikHelpers, FieldArray } from "formik";
import FormField from "./FormField";
import styled from "styled-components";
import Button from "./Button";
import { themeBlueLight, themeBlue } from "../styled/themes";
import FormRadios from "./FormRadios";
import FormSelect from "./FormSelect";

interface Values {
  name: string;
  teacher: string;
  type: string;
  position: string;
  technique: string;
  steps: never[];
}

const FormCreateEdit: FC<{
  teachers: any;
  types: any;
  positions: any;
  techniques: any;
}> = ({ teachers, types, positions, techniques }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        teacher: "",
        type: "",
        position: "",
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
              <FormRadios
                name="teacher"
                data={teachers}
                selected={values.teacher}
              />
            </FormBlock>

            <FormBlock>
              <FormRadios name="type" data={types} selected={values.type} />
            </FormBlock>

            <FormBlock>
              <FormSelect name="position" data={positions}></FormSelect>
            </FormBlock>

            <FormBlock>
              <FormSelect name="technique" data={techniques}></FormSelect>
            </FormBlock>

            <FormBlock>
              <FormLabel as="div">steps</FormLabel>
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
                ok
              </Button>
              <Button type="reset" theme={themeBlueLight}>
                cancel
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

export const FormLabel = styled.label`
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

const FormActions = styled.div`
  display: flex;
  justify-content: center;
  ${Button} {
    margin: 0 1rem;
  }
`;
export default FormCreateEdit;
