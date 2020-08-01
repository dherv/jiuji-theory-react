import { Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import FormActions from './FormActions';
import FormField from './FormField';
import FormLabel from './FormLabel';
import FormRadios from './FormRadios';
import FormSelect from './FormSelect';
import FormSteps from './FormSteps';

interface Values {
  name: string;
  teacher: string;
  type: string;
  position: string;
  technique: string;
  steps: { name: string }[];
}

const FormCreateEdit: FC<{
  teachers: any;
  types: any;
  positions: any;
  techniques: any;
  steps: { name: string }[];
}> = ({ teachers, types, positions, techniques, steps }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        teacher: "",
        type: "",
        position: "",
        technique: "",
        steps,
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
              <FormSteps values={values} />
            </FormBlock>

            <FormActions></FormActions>
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

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export default FormCreateEdit;
