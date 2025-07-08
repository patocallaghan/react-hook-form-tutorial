import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Lesson11 } from './lesson-11'

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('Lesson11', () => {
  it('should render the lesson content', () => {
    render(<Lesson11 />)
    
    expect(screen.getByText('Lesson 11: Coming Soon')).toBeInTheDocument()
  })

  it('should have a link back to home', () => {
    render(<Lesson11 />)
    
    const homeLink = screen.getByText('← Back to Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })
})
