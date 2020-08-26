import 'jest-styled-components';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PageHome from '../pages/PageHome';

jest.mock('../components/ErrorBoundary');

const server = setupServer(
  rest.get('http://localhost:3000/v1/techniques', (req, res, ctx) => {
    return res(
      ctx.json({
        techniques: [
          {
            id: 1,
            name: 'test',
            guard: { id: 1, name: 'open guard' },
            submission: { id: 1, name: 'kimura' },
            position: { id: 1, name: 'OFFENSIVE' },
            teacher: { id: 1, name: 'X' },
          },
        ],
      })
    );
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => {
  render(<PageHome />);
});

test('should render the layout header', async () => {
  await waitFor(() => {});
  await waitFor(() => {
    expect(screen.queryByRole('banner')).toBeInTheDocument();
  });
});
test('should render techniques', async () => {
  await waitFor(() => {
    expect(screen.queryAllByText('kimura')).toHaveLength(1);
  });
});
