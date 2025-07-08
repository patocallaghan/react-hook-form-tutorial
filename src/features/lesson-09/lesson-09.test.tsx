import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Lesson09 } from './lesson-09';

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('Lesson09', () => {
  it('should render the lesson content', () => {
    render(<Lesson09 />);

    expect(screen.getByText('Lesson 09: Coming Soon')).toBeInTheDocument();
  });

  it('should have a link back to home', () => {
    render(<Lesson09 />);

    const homeLink = screen.getByText('← Back to Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
});
