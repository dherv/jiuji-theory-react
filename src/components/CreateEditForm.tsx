import { Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import TemplateForm from '../templates/TemplateForm';
import { IMove } from '../types/Move.interface';
import { IPosition } from '../types/Position.interface';
import { IStep } from '../types/Step.interface';
import { ISubmission } from '../types/Submission.interface';
import { ITeacher } from '../types/Teacher.interface';
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
  move: string;
  position: string;
  technique: string;
  steps: IStep[];
}

const CreateEditForm: FC<{
  teachers: ITeacher[];
  moves: IMove[];
  positions: IPosition[];
  techniques: ISubmission[];
  steps: IStep[];
}> = ({ teachers, moves, positions, techniques, steps }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        teacher: '',
        move: '',
        position: '',
        technique: '',
        steps,
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
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
            <FormRadios name="type" data={moves} selected={values.move} />
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="position">position</FormLabel>
            <FormSelect name="position" data={positions} />
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="technique">technique</FormLabel>
            <FormSelect name="technique" data={techniques} />
          </FormBlock>

          <FormBlock>
            <FormSteps values={values} />
          </FormBlock>

          <FormActions />
        </TemplateForm>
      )}
    </Formik>
  );
};

export default CreateEditForm;
