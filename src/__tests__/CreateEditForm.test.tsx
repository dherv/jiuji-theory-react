import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CreateEditForm from '../components/CreateEditForm';
import { CreateEditFormProps as props } from '../samples/CreateEditForm.sample';

test('should render a text input for name', () => {
  render(<CreateEditForm {...props} />);
  expect(screen.getByLabelText('name')).toBeInTheDocument();
});
test('should render a radio input for teacher', () => {
  render(<CreateEditForm {...props} />);
  expect(screen.getByLabelText('teacher')).toBeInTheDocument();

  // radio inputs are displayed correctly
  expect(screen.getByLabelText('X')).toBeInTheDocument();
  expect(screen.getByLabelText('Y')).toBeInTheDocument();
});

test('should render a radio input for position', () => {
  render(<CreateEditForm {...props} />);
  expect(screen.getByLabelText('type')).toBeInTheDocument();
  // radio inputs are displayed correctly
  expect(screen.getByLabelText('offensive')).toBeInTheDocument();
  expect(screen.getByLabelText('defensive')).toBeInTheDocument();
});
test('should render a select input for position', () => {
  render(<CreateEditForm {...props} />);
  expect(screen.getByLabelText('position')).toBeInTheDocument();
  // check options are displayed
  expect(screen.getByText('open guard')).toBeInTheDocument();
  expect(screen.getByText('half guard')).toBeInTheDocument();
});

test('should render a select input for technique', () => {
  render(<CreateEditForm {...props} />);
  expect(screen.getByLabelText('technique')).toBeInTheDocument();
  // check options are displayed
  expect(screen.getByText('triangle')).toBeInTheDocument();
  expect(screen.getByText('kimura')).toBeInTheDocument();
});

test('should display a step on click +, enter the input correctly and delete it on click x', async () => {
  render(<CreateEditForm {...props} />);

  // the component should already have received one element from the props

  fireEvent.click(screen.getByText('+'));
  await waitFor(() => {
    expect(screen.getAllByPlaceholderText('enter a step')).toHaveLength(2);
  });

  fireEvent.input(screen.getAllByPlaceholderText('enter a step')[1], {
    target: { value: 'step 2' },
  });
  await waitFor(() => {
    expect(screen.queryAllByDisplayValue('step 2')).toHaveLength(1);
  });

  fireEvent.click(screen.getAllByText('x')[1]);
  await waitFor(() => {
    expect(screen.queryByDisplayValue('step 1')).toBeInTheDocument();
    expect(screen.queryByDisplayValue('step 2')).toBeNull();
  });
});

test('should clear the form on click cancel', async () => {
  render(<CreateEditForm {...props} />);
  fireEvent.click(screen.getByText('+'));
  fireEvent.input(screen.getAllByPlaceholderText('enter a step')[1], {
    target: { value: 'step 2' },
  });
  fireEvent.input(screen.getByPlaceholderText('name'), {
    target: { value: 'name' },
  });
  fireEvent.click(screen.getByText('defensive'));
  fireEvent.click(screen.getByText('Y'));
  fireEvent.click(screen.getByText('cancel'));
  await waitFor(() => {
    expect(screen.queryByDisplayValue('name')).toBeNull();
    expect(screen.queryByDisplayValue('step 1')).toBeInTheDocument();
    expect(screen.queryByDisplayValue('step 2')).toBeNull();
    expect(screen.getByText('Y').parentNode).toHaveStyleRule(
      'background-color',
      '#fff'
    );
    expect(screen.getByText('defensive').parentNode).toHaveStyleRule(
      'background-color',
      '#fff'
    );
  });
});
