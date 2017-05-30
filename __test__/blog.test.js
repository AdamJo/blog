import Blog from '../src/routes/blog';

describe('routes/Blog', () => {
  it('exports `Blog`', () => {
    expect(typeof Blog).toBe('function');
  });
});
