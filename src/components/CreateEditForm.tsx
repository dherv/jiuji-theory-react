import { Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';
import TemplateForm from '../templates/TemplateForm';
import { IGuard } from '../types/Guard.interface';
import { IPosition } from '../types/Position.interface';
import { IStep } from '../types/Step.interface';
import { ISubmission } from '../types/Submission.interface';
import { ITeacher } from '../types/Teacher.interface';
import FormActions from './FormActions';
import FormBlock from './FormBlock';
import FormError from './FormError';
import FormField from './FormField';
import FormLabel from './FormLabel';
import FormRadios from './FormRadios';
import FormSelect from './FormSelect';
import FormSteps from './FormSteps';

interface Values {
  name: string;
  teacher: string;
  position: string;
  guard: string;
  submission: string;
  steps: IStep[];
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'too short!')
    .max(50, 'too long!')
    .required('required'),
  teacher: Yup.string().required('required'),
  move: Yup.string().required('required'),
  position: Yup.string().required('required'),
  technique: Yup.string().required('required'),
  steps: Yup.array().of(Yup.string()).min(1),
});

const CreateEditForm: FC<{
  teachers: ITeacher[];
  positions: IPosition[];
  guards: IGuard[];
  submissions: ISubmission[];
  steps: IStep[];
}> = ({ teachers, positions, guards, submissions, steps }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        teacher: '',
        position: '',
        guard: '',
        submission: '',
        steps,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, errors, touched }) => (
        <TemplateForm>
          <FormBlock>
            <FormLabel htmlFor="name">name</FormLabel>
            <FormField
              id="name"
              name="name"
              placeholder="name"
              error={errors.name}
              touched={touched.name ? touched.name.toString() : undefined}
            />
            {errors.name && touched.name ? (
              <FormError>{errors.name}</FormError>
            ) : null}
          </FormBlock>

          <FormBlock>
            <FormRadios
              name="teacher"
              data={teachers}
              selected={values.teacher}
            />
            {errors.teacher && touched.teacher ? (
              <FormError>{errors.teacher}</FormError>
            ) : null}
          </FormBlock>

          <FormBlock>
            <FormRadios
              name="position"
              data={positions}
              selected={values.position}
            />
            {errors.position && touched.position ? (
              <FormError>{errors.position}</FormError>
            ) : null}
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="guard">guard</FormLabel>
            <FormSelect name="guard" data={guards} />
            {errors.guard && touched.guard ? (
              <FormError>{errors.guard}</FormError>
            ) : null}
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="submission">submission</FormLabel>
            <FormSelect name="submission" data={submissions} />
            {errors.submission && touched.submission ? (
              <FormError>{errors.submission}</FormError>
            ) : null}
          </FormBlock>

          <FormBlock>
            <FormSteps values={values} />
            {errors.steps && touched.steps ? (
              <FormError>{errors.steps}</FormError>
            ) : null}
          </FormBlock>

          <FormActions />
        </TemplateForm>
      )}
    </Formik>
  );
};

export default CreateEditForm;
