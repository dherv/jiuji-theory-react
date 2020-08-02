import { Formik, FormikHelpers } from 'formik';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import TemplateForm from '../templates/TemplateForm';
import Button from './Button';
import FormActions from './FormActions';
import FormBlock from './FormBlock';
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

const AccountForm: FC<{
  clubs: any[];
  locations: any[];
  belts: any[];
  types: any[];
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
            <FormLabel htmlFor="email">email</FormLabel>
            <FormField
              type="email"
              id="email"
              name="email"
              placeholder="email"
            />
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
