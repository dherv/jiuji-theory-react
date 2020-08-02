import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import FormBlock from '../components/FormBlock';
import { FormBlockProps as props } from '../samples/FormBlock.sample';

test('should render FormBlock', () => {
  const { asFragment } = render(<FormBlock {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
