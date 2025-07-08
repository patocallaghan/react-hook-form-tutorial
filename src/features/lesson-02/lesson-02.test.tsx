import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Lesson02 } from './lesson-02';

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('Lesson02', () => {
  it('should render the lesson content', () => {
    render(<Lesson02 />);

    expect(screen.getByText('Lesson 02: Coming Soon')).toBeInTheDocument();
  });

  it('should have a link back to home', () => {
    render(<Lesson02 />);

    const homeLink = screen.getByText('← Back to Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
});
