import React, { FC, Suspense, useEffect, useRef, useState } from 'react';
import Api from '../api';
import CreateEditForm from '../components/CreateEditForm';
import ErrorBoundary from '../components/ErrorBoundary';
// import { CreateEditFormProps as props } from '../samples/CreateEditForm.sample';
import TemplatePage from '../templates/TemplatePage';
import { IGuard } from '../types/Guard.interface';
import { IPosition } from '../types/Position.interface';
import { IStep } from '../types/Step.interface';
import { ISubmission } from '../types/Submission.interface';
import { ITeacher } from '../types/Teacher.interface';
import { IVideo } from '../types/Video.interface';

const initialPositions: IPosition[] = [
  { id: 1, name: 'offensive' },
  { id: 2, name: 'defensive' },
];

const PageCreateEdit: FC = () => {
  // get all teachers, guards, submissions
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [guards, setGuards] = useState<IGuard[]>([]);
  const [submissions, setSubmissions] = useState<ISubmission[]>([]);
  const [positions, setPositions] = useState<IPosition[]>(initialPositions);
  const [videos, setVideos] = useState<never[]>([]);
  const [steps, setSteps] = useState<IStep[]>([]);

  const isMountedRef = useRef(false);

  const fetchTeachers = () => {
    return Api.get('/teachers');
  };
  const fetchGuards = () => {
    return Api.get('/guards');
  };
  const fetchSubmissions = () => {
    return Api.get('/submissions');
  };

  useEffect(() => {
    // TODO: add AbortController in each request
    isMountedRef.current = true;
    const fetchAll = () =>
      Promise.all([fetchTeachers(), fetchGuards(), fetchSubmissions()]);

    fetchAll().then(
      (
        response: [
          { teachers: ITeacher[] },
          { guards: IGuard[] },
          { submissions: ISubmission[] }
        ]
      ) => {
        if (isMountedRef.current) {
          const [resTeachers, resGuards, resSubmissions] = response;
          setTeachers(resTeachers.teachers);
          setGuards(resGuards.guards);
          setSubmissions(resSubmissions.submissions);
        }
      }
    );

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const props = {
    teachers,
    guards,
    submissions,
    positions,
    videos,
    steps,
  };
  return (
    <ErrorBoundary>
      <TemplatePage>
        <CreateEditForm {...props} />
      </TemplatePage>
    </ErrorBoundary>
  );
};

export default PageCreateEdit;
