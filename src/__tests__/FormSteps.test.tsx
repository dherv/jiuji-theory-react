import 'jest-styled-components';
import { Form, Formik } from 'formik';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FormSteps from '../components/FormSteps';

test('should render FormSteps', () => {
  render(
    <Formik
      initialValues={{ steps: [{ name: 'step 1' }] }}
      onSubmit={jest.fn()}
    >
      {({ values }) => (
        <Form>
          <FormSteps values={values} />
        </Form>
      )}
    </Formik>
  );
  expect(screen.getByDisplayValue('step 1')).toBeInTheDocument();
});

test('should display a step on click +, enter the input correctly and delete it on click x', async () => {
  render(
    <Formik
      initialValues={{ steps: [{ name: 'step 1' }] }}
      onSubmit={jest.fn()}
    >
      {({ values }) => (
        <Form>
          <FormSteps values={values} />
        </Form>
      )}
    </Formik>
  );

  fireEvent.click(screen.getByText('+'));
  await waitFor(() => {
    expect(screen.queryAllByPlaceholderText('enter a step')).toHaveLength(2);
  });

  fireEvent.input(screen.queryAllByPlaceholderText('enter a step')[1], {
    target: { value: 'step 2' },
  });
  await waitFor(() => {
    expect(screen.queryAllByDisplayValue('step 2')).toHaveLength(1);
  });

  fireEvent.click(screen.queryAllByText('x')[1]);
  await waitFor(() => {
    expect(screen.queryByDisplayValue('step 1')).toBeInTheDocument();
    expect(screen.queryByDisplayValue('step 2')).toBeNull();
  });
});
