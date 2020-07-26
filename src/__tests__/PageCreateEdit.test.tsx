import 'jest-styled-components';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PageCreateEdit from '../pages/PageCreateEdit';
import { PageCreateEditProps as props } from '../samples/PageCreateEdit.sample';

test("should render PageCreateEdit", () => {
  render(<PageCreateEdit {...props} />);
});
