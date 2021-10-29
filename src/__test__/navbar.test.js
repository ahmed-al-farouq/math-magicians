import renderer from 'react-test-renderer';

it('Test navbar', () => {
  const tree = renderer.create(<Navbar />).toJSON();
});