import React, {FC, useEffect, useState} from "react";
import FormBlock from "./FormBlock";
import FormLabel from "./FormLabel";
import FormSelect from "./FormSelect";
import FormField from "./FormField";
import {Formik, FormikHelpers} from "formik";
import TemplateForm from "../templates/TemplateForm";
import FormActions from "./FormActions";
import * as Yup from "yup";
import FormError from "./FormError";
import {ILocation} from "../types/Location.interface";
import {IClub} from "../types/Club.interface";
import Api from "../api";

interface Values {
  name: string;
  type: string;
  club: string;
  location: string;
}

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'too short!')
    .max(50, 'too long!')
    .required('required'),
});

const AccountFormAdd: FC = () => {
  //TODO: location api is not ready yet, replace this section once done.
  const [locations, setLocations] = useState<ILocation[]>([{name: "Tokyo", id: 1}])
  const [clubs, setClubs] = useState<IClub[]>([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const {clubs} = await Api.get("/clubs")
      setClubs(clubs);
    }
    fetchClubs();
  }, []);

  return (
    <Formik
      initialValues={{
        name: '',
        type: '',
        location: '',
        club: '',

      }}
      validationSchema={Schema}
      onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
          setSubmitting(true);

          if(values.type === '1') {
            await Api.post("/clubs", {name: values.name, location: locations.find(l => l.id === Number(values.location))})
          }

          if(values.type === '2') {
            await Api.post("/teachers", {name: values.name, club: clubs.find(c => c.id === Number(values.club))})
          }

          setSubmitting(false);
      }}
    >
      {({values, errors, touched}) => (
        <TemplateForm>
          <FormBlock>
            <FormLabel htmlFor="type">type</FormLabel>
            <FormSelect name="type" data={[{id: 1, name: 'club'}, {id: 2, name: 'teacher'}]}/>
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor="name">name</FormLabel>
            <FormField type="text"
              id="name"
                       name="name"
                       placeholder="name"
                       error={errors.name}
                       touched={touched.name ? touched.name.toString() : undefined}/>
            {errors.name && touched.name ? (
              <FormError>{errors.name}</FormError>
            ) : null}
          </FormBlock>

          {values.type === "1" && (
            <FormBlock>
              <FormLabel htmlFor="location">location</FormLabel>
              <FormSelect name="location" data={locations}/>
            </FormBlock>)}

          {values.type === "2" && (
            <FormBlock>
              <FormLabel htmlFor="club">club</FormLabel>
              <FormSelect name="club" data={clubs}/>
            </FormBlock>)}
          <FormActions/>
        </TemplateForm>
      )}
    </Formik>
  )
}


export default AccountFormAdd