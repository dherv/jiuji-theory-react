import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { FormSelectProps } from '../samples/FormSelect.sample';
import { VideoProps } from '../samples/Video.sample';
import FormActions from './FormActions';
import Select from './FormSelect';
import Video from './Video';
import VideoContentAdd from './VideoContentAdd';

const VideoAdd: FC<{
  id: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<SVGAElement>) => void;
}> = ({ title, description, onClick, selected }) => {
  return (
    <div>
      <Video {...VideoProps}>
        <VideoContentAdd
          description={description}
          title={title}
          onClick={onClick}
        />
      </Video>
      {selected ? (
        <Formik
          initialValues={{
            technique: '',
          }}
          onSubmit={() => {}}
        >
          <StyledForm>
            <Select {...FormSelectProps} />
            <StyledFormActions />
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
