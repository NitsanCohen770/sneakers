import React from 'react';
import { render } from '@testing-library/react';
import { BasicImageViewer } from './image-viewer.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicImageViewer />);
  const rendered = getByText('hello from ImageViewer');
  expect(rendered).toBeTruthy();
});
