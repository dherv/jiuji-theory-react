import { Formik, FormikHelpers } from 'formik';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import TemplateForm from '../templates/TemplateForm';
import { IAddType } from '../types/AddType.interface';
import { IBelt } from '../types/Belt.interface';
import { IClub } from '../types/Club.interface';
import { ILocation } from '../types/Location.interface';
import Button from './Button';
import FormActions from './FormActions';
import FormBlock from './FormBlock';
import FormError from './FormError';
import FormField from './FormField';
import FormLabel from './FormLabel';
import FormSelect from './FormSelect';

interface Values {
  name: string;
  email: string;
  club: string;
  location: string;
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
  clubs: IClub[];
  locations: ILocation[];
  belts: IBelt[];
  types: IAddType[];
}> = ({ clubs, locations, belts, types }) => {
  const [showAddPanel, setShowAddPanel] = useState<boolean>(false);
  const handleClick = () => {
    setShowAddPanel(true);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        club: '',
        location: '',
        belt: '',
        logo: '',
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
            <FormSelect name="club" data={clubs} />
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="location">location</FormLabel>
            <FormSelect name="location" data={locations} />
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="belt">belt</FormLabel>
            <FormSelect name="belt" data={belts} />
          </FormBlock>

          <StyledButton type="button" onClick={handleClick}>
            add
          </StyledButton>

          {showAddPanel ? (
            <>
              <FormBlock>
                <FormLabel htmlFor="type">type</FormLabel>
                <FormSelect name="type" data={types} />
              </FormBlock>
              <FormBlock>
                <FormLabel htmlFor="name">name</FormLabel>
                <FormField id="name" name="name" placeholder="name" />
              </FormBlock>
              {values.type === 'clubs' && (
                <FormBlock>
                  <FormLabel htmlFor="logo">logo</FormLabel>
                  <FormField
                    type="file"
                    id="logo"
                    name="logo"
                    placeholder="upload logo"
                  />
                </FormBlock>
              )}
            </>
          ) : null}
          <FormActions />
        </TemplateForm>
      )}
    </Formik>
  );
};

const StyledButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  text-align: center;
`;
export default AccountForm;
