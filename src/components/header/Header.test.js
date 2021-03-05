import React from 'react';
import { render, screen } from '@testing-library/react';
//import Adapter from 'enzyme-adapter-react-16';
//import { shallow, configure } from 'enzyme';
import Header from './Header';

// configure({
//   adapter: new Adapter(),
// });

it('renders an `.logo-image`', () => {
  render(<Header />);
  const header = screen.getByAltText(/logo/i);
  expect(header).toBeInTheDocument();
});
