import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('Match quote snapshoot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
