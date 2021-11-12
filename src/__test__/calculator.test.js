import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Match calculator snapshoot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
