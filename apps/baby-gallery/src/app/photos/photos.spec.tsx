import { render } from '@testing-library/react';

import Photos from './photos';

describe('Photos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Photos />);
    expect(baseElement).toBeTruthy();
  });
});
