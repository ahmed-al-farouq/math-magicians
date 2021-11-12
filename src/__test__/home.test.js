import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Match home snapshoot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
