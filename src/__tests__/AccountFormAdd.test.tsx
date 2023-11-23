import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import AccountFormAdd from '../components/AccountFormAdd';
import { AccountFormAddProps as props } from '../samples/AccountFormAdd.sample';

describe.skip('AccountForm component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    render(<AccountFormAdd {...props} />);
  });
  test('should render a type select', () => {
    expect(screen.getByLabelText('type')).toBeInTheDocument();
    expect(screen.queryAllByRole('combobox')).toHaveLength(4);
    expect(screen.queryAllByText('location')).toHaveLength(2);
  });
  test('should render a name input', () => {
    expect(screen.getByLabelText('name')).toBeInTheDocument();
    expect(screen.queryAllByRole('textbox')).toHaveLength(3);
    expect(screen.queryAllByText('name')).toHaveLength(2);
  });
  test('should render a logo upload input if current type is clubs', async () => {
    fireEvent.change(screen.getByLabelText('type'), {
      target: { value: 'clubs' },
    });
    await waitFor(() => {
      expect(screen.getByLabelText('logo')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('upload logo')).toBeInTheDocument();
    });
  });

  test('should uploaed a logo and return a message', async () => {
    fireEvent.change(screen.getByLabelText('type'), {
      target: { value: 'clubs' },
    });
    await waitFor(() => {
      expect(screen.getByLabelText('logo')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('upload logo')).toBeInTheDocument();
    });
    const input = screen.getByLabelText('logo') as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    user.upload(input, file);
    await waitFor(() => {
      const files = input.files as FileList;
      expect(files[0]).toEqual(file);
      expect(files).toHaveLength(1);
    });
  });
});
