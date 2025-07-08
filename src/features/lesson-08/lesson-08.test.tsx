import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Lesson08 } from './lesson-08'

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('Lesson08', () => {
  it('should render the lesson content', () => {
    render(<Lesson08 />)
    
    expect(screen.getByText('Lesson 08: Coming Soon')).toBeInTheDocument()
  })

  it('should have a link back to home', () => {
    render(<Lesson08 />)
    
    const homeLink = screen.getByText('← Back to Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })
})
