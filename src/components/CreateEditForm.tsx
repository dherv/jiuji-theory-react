import { Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import TemplateForm from '../templates/TemplateForm';
import FormActions from './FormActions';
import FormBlock from './FormBlock';
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

const CreateEditForm: FC<{
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
        <TemplateForm>
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
            <FormLabel htmlFor="position">position</FormLabel>
            <FormSelect name="position" data={positions}></FormSelect>
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="technique">technique</FormLabel>
            <FormSelect name="technique" data={techniques}></FormSelect>
          </FormBlock>

          <FormBlock>
            <FormSteps values={values} />
          </FormBlock>

          <FormActions></FormActions>
        </TemplateForm>
      )}
    </Formik>
  );
};

export default CreateEditForm;
