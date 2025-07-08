import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Lesson05 } from './lesson-05';

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('Lesson05', () => {
  it('should render the lesson content', () => {
    render(<Lesson05 />);

    expect(screen.getByText('Lesson 05: Coming Soon')).toBeInTheDocument();
  });

  it('should have a link back to home', () => {
    render(<Lesson05 />);

    const homeLink = screen.getByText('← Back to Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });
});
