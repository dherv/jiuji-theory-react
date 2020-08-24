import 'jest-styled-components';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { render, screen, wait, waitFor } from '@testing-library/react';
import PageCreateEdit from '../pages/PageCreateEdit';
import { PageCreateEditProps as props } from '../samples/PageCreateEdit.sample';

jest.mock('../components/ErrorBoundary');

const handlers = [
  rest.get('http://localhost:3000/v1/teachers', (req, res, ctx) => {
    return res(ctx.json({ teachers: [{ id: 1, name: 'X' }] }));
  }),
  rest.get('http://localhost:3000/v1/guards', (req, res, ctx) => {
    return res(ctx.json({ guards: [{ id: 1, name: 'open guard' }] }));
  }),
  rest.get('http://localhost:3000/v1/submissions', (req, res, ctx) => {
    return res(ctx.json({ submissions: [{ id: 1, name: 'kimura' }] }));
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => {
  render(<PageCreateEdit {...props} />);
});
test('should render the layout header', async () => {
  expect(screen.getByRole('banner')).toBeInTheDocument();
});

test('fetch all the values correctly', async () => {
  await waitFor(() => {
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('kimura')).toBeInTheDocument();
    expect(screen.getByText('open guard')).toBeInTheDocument();
  });
});
