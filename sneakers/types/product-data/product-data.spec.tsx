import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductData } from './product-data.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProductData />);
  const rendered = getByText('hello from ProductData');
  expect(rendered).toBeTruthy();
});
