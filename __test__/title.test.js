import Title from '../src/components/title/';

describe('components/Title', () => {
  it('exports `Title`', () => {
    expect(typeof Title).toBe('function');
  });

  it('should show the name of the user passed to it', () => {
    const title = render(<Title name="User" />);
    expect(title).toContain('<h1>User</h1>');
  });

  test('Snapshot Render', () => {
    const tree = render(<Title name="User" />);
    expect(tree).toMatchSnapshot();
  });
});
