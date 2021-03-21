import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Cards from '.';

test('Should render the Grid Container component', () => {
  const { getByTestId } = render(
    <Cards followers="1" public_repos="1" following="1" public_gists="1" />,
  );
  const component = getByTestId('grid-container');
  expect(component).toBeInTheDocument();
});
