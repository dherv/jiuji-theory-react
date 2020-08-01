import { Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { SelectProps } from '../samples/Select.sample';
import { VideoProps } from '../samples/Video.sample';
import FormActions from './FormActions';
import Select from './Select';
import Video from './Video';
import VideoContentAdd from './VideoContentAdd';

const VideoAdd: FC<{
  id: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<SVGAElement>) => void;
}> = ({ id, title, description, onClick, selected }) => {
  return (
    <div>
      <Video {...VideoProps}>
        <VideoContentAdd
          description={description}
          title={title}
          onClick={onClick}
        ></VideoContentAdd>
      </Video>
      {selected ? (
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
      ) : null}
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
