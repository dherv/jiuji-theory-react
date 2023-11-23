import {Formik, FormikHelpers} from 'formik';
import React, {FC, useState} from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import TemplateForm from '../templates/TemplateForm';
import {IBelt} from '../types/Belt.interface';
import {IClub} from '../types/Club.interface';
import {ILocation} from '../types/Location.interface';
import Button from './Button';
import FormActions from './FormActions';
import FormBlock from './FormBlock';
import FormError from './FormError';
import FormField from './FormField';
import FormLabel from './FormLabel';
import FormSelect from './FormSelect';
import AccountFormAdd from "./AccountFormAdd";

interface Values {
  name: string;
  email: string;
  club: string;
  belt: string;
  type?: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('invalid email').required('required'),
  name: Yup.string()
    .min(8, 'too short!')
    .max(50, 'too long!')
    .required('required'),
});

const AccountForm: FC<{
  belts: IBelt[];
}> = ({belts}) => {
  const [showAddPanel, setShowAddPanel] = useState<boolean>(false);
  const [clubs, setClubs] = useState<IClub[]>([{name: "Carpe Diem", id: 1}])

  const handleClick = () => {
    setShowAddPanel(true);
  };
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          club: '',
          belt: '',
          logo: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: Values, {setSubmitting}: FormikHelpers<Values>) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 200);
        }}
      >
        {({values, errors, touched}) => (
          <TemplateForm>
            <FormBlock>
              <FormLabel htmlFor="name">name</FormLabel>
              <FormField
                type="text"
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
              <FormLabel htmlFor="email">email</FormLabel>
              <FormField
                type="email"
                id="email"
                name="email"
                placeholder="email"
                error={errors.email}
                touched={touched.email ? touched.email.toString() : undefined}
              />
              {errors.email && touched.email ? (
                <FormError>{errors.email}</FormError>
              ) : null}
            </FormBlock>

            <FormBlock>
              <FormLabel htmlFor="club">club</FormLabel>
              <FormSelect name="club" data={clubs}/>
            </FormBlock>

            <FormBlock>
              <FormLabel htmlFor="belt">belt</FormLabel>
              <FormSelect name="belt" data={belts}/>
            </FormBlock>

            <FormActions/>
            <StyledButton type="button" onClick={handleClick}>
              add
            </StyledButton>
          </TemplateForm>
        )}
      </Formik>

      {showAddPanel ? (
        <>
          <AccountFormAdd/>
        </>
      ) : null}
    </>
  );
};

const StyledButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  text-align: center;
`;
export default AccountForm;
