import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Lesson03 } from './lesson-03';

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('Lesson03', () => {
  it('should render the lesson content', () => {
    render(<Lesson03 />);

    expect(screen.getByText('Lesson 03: Coming Soon')).toBeInTheDocument();
  });

  it('should have a link back to home', () => {
    render(<Lesson03 />);

    const homeLink = screen.getByText('← Back to Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
});
