import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from '.';

test('Should render the loading component', () => {
  const { getByTestId } = render(<Loading />);
  const component = getByTestId('loading');
  expect(component).toBeInTheDocument();
});
