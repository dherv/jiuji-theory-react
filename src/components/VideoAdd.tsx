import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { SelectProps } from '../samples/Select.sample';
import { VideoProps } from '../samples/Video.sample';
import FormActions from './FormActions';
import Select from './Select';
import Video from './Video';
import VideoContentAdd from './VideoContentAdd';

const VideoAdd: FC<{ id: string; title: string; description: string }> = ({
  id,
  title,
  description,
}) => {
  return (
    <div>
      <Video {...VideoProps}>
        <VideoContentAdd
          description={description}
          title={title}
          onClick={() => {}}
        ></VideoContentAdd>
      </Video>
      <Formik
        initialValues={{
          technique: "",
        }}
        onSubmit={() => {}}
      >
        <StyledForm>
          <Select {...SelectProps}></Select>
          <StyledFormActions></StyledFormActions>
        </StyledForm>
      </Formik>
    </div>
  );
};

const StyledForm = styled(Form)`
  margin: 1rem 0;
`;

const StyledFormActions = styled(FormActions)`
  margin-top: 1rem;
`;

export default VideoAdd;
