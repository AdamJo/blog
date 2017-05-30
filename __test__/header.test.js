import Header from '../src/components/header';

describe('components/Header', () => {
  const header = render(<Header />);

  it('exports `Header`', () => {
    expect(typeof Header).toBe('function');
  });

  it('should contain a link to Home', () => {
    expect(header).toContain('<a href="/" class>⛶</a>');
  });

  it('should contain a link to Projects', () => {
    expect(header).toContain('<a href="/projects" class>Projects</a>');
  });

  it('should contain a link to Workshop', () => {
    expect(header).toContain('<a href="/workshop" class>Workshop</a>');
  });

  it('should contain a link to Blog', () => {
    expect(header).toContain('<a href="/blog" class>Blog</a>');
  });
});
