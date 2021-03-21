import React from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '.';

test('Should render the form and input', () => {
  const mockChangeValue = jest.fn();
  const { getByTestId } = render(
    <Form handleSubmit={mockChangeValue} setNameToFind="ReactJS" />,
  );
  const input = getByTestId('find-user-input');
  const form = getByTestId('find-user-form');
  expect(input).toBeInTheDocument();
  expect(form).toBeInTheDocument();
});
