import React from 'react';
import { render } from '@testing-library/react';
import { BasicSneakersStore } from './sneakers-store.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSneakersStore />);
  const rendered = getByText('hello from SneakersStore');
  expect(rendered).toBeTruthy();
});
