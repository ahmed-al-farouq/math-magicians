import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Navbar from '../components/Navbar';

it('Test navbar', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
