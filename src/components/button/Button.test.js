/* eslint-disable no-console */
import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from './Button';

test('Luxon', () => {
  const rel = 'prev';
  const url = 'link.com';
  const tree = renderer
    .create(<Button key={rel} url={url} rel={rel} fetchData={data => console.log(data)} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
