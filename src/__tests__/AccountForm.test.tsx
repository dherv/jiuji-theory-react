import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import AccountForm from '../components/AccountForm';
import { AccountFormProps as props } from '../samples/AccountForm.sample';

describe('account form', () => {
  beforeEach(() => {
    render(<AccountForm {...props} />);
  });

  test('should render AccountForm', () => {
    expect(screen.queryAllByRole('textbox')).toHaveLength(2);
    expect(screen.queryAllByRole('combobox')).toHaveLength(3);
    expect(screen.queryAllByRole('button')).toHaveLength(3);
  });
  test('should render a name input', () => {
    expect(screen.getByLabelText('name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
  });
  test('should render an email input', () => {
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
  });
  test('should render a club select', () => {
    expect(screen.getByLabelText('club')).toBeInTheDocument();
    expect(screen.getByText('club 1')).toBeInTheDocument();
  });
  test('should render a location select', () => {
    expect(screen.getByLabelText('location')).toBeInTheDocument();
    expect(screen.getByText('location 1')).toBeInTheDocument();
  });
  test('should render a belt select', () => {
    expect(screen.getByLabelText('belt')).toBeInTheDocument();
    expect(screen.getByText('blue')).toBeInTheDocument();
  });
  test('should submit the form on click ok', async () => {
    expect(screen.getByText('add')).toBeInTheDocument();
  });
  test('should cancel the form on click cancel', async () => {
    fireEvent.change(screen.getByLabelText('name'), {
      target: { value: 'new name' },
    });
    fireEvent.change(screen.getByLabelText('club'), {
      target: { value: 2 },
    });
    await waitFor(() => {
      expect(screen.queryByDisplayValue('new name')).toBeInTheDocument();
      expect(screen.queryByDisplayValue('club 2')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('cancel'));
    await waitFor(() => {
      expect(screen.queryByDisplayValue('new name')).toBeNull();
      expect(screen.queryByDisplayValue('club 2')).toBeNull();
    });
  });

  test('should render an add button', async () => {
    expect(screen.getByText('add')).toBeInTheDocument();
  });

  test('should display the fields correctly with no validation', () => {
    expect(screen.queryByText('required')).toBeNull();
    expect(screen.getByLabelText('email')).toHaveStyleRule(
      'border',
      '1px solid rgba(18,70,246,0.1)'
    );
    expect(screen.getByLabelText('name')).toHaveStyleRule(
      'border',
      '1px solid rgba(18,70,246,0.1)'
    );
  });
  test('should validate the fields correctly', async () => {
    fireEvent.click(screen.getByText('ok'));
    await waitFor(() => {
      expect(screen.queryAllByText('required')).toHaveLength(2);

      expect(screen.getByLabelText('email')).toHaveStyleRule(
        'border',
        '1px solid #ff867c'
      );
      expect(screen.getByLabelText('name')).toHaveStyleRule(
        'border',
        '1px solid #ff867c'
      );
    });
  });
  test('should validate the fields correctly after correcting them', async () => {
    fireEvent.click(screen.getByText('ok'));
    // await waitFor(() => {});
    fireEvent.change(screen.getByLabelText('name'), {
      target: { value: 'username' },
    });
    fireEvent.change(screen.getByLabelText('email'), {
      target: { value: 'username@email.com' },
    });

    fireEvent.click(screen.getByText('ok'));
    await waitFor(() => {
      expect(screen.getByLabelText('email')).toHaveStyleRule(
        'border',
        '1px solid #98ee99'
      );
      expect(screen.getByLabelText('name')).toHaveStyleRule(
        'border',
        '1px solid #98ee99'
      );
    });
  });
});