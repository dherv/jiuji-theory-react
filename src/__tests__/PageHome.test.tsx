import 'jest-styled-components';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PageHome from '../pages/PageHome';

jest.mock('../components/ErrorBoundary');

const handlers = [
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
            steps: [{ text: 'step 1', order: 1 }],
          },
        ],
      })
    );
  }),
  rest.delete(`http://localhost:3000/v1/techniques/1`, (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'deleted',
        technique: { id: 1 },
      })
    );
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => {
  render(<PageHome />);
});

test('should render the layout header', async () => {
  const banner = await screen.findByRole('banner');
  await waitFor(() => expect(banner).toBeInTheDocument());
});

test('should render techniques', async () => {
  await waitFor(() => expect(screen.queryAllByText('kimura')).toHaveLength(1));
  expect(screen.queryAllByText('test')).toHaveLength(1);
});

test('should show the content of an item when item is clicked', async () => {
  await waitFor(() => expect(screen.queryByText('video title')).toBeNull());
  expect(screen.queryByText('video description')).toBeNull();
  userEvent.click(screen.getByText('test'));
  await waitFor(() =>
    expect(screen.queryAllByText('video title')).toHaveLength(3)
  );
  expect(screen.queryAllByText('video description')).toHaveLength(3);
});

test('click archive icon should delete the item', async () => {
  const technique = await screen.findByText('test');
  userEvent.click(technique);
  userEvent.click(screen.getByTitle('technique-archive'));
  await waitFor(() => {
    expect(screen.queryByText('test')).toBeNull();
  });
});
