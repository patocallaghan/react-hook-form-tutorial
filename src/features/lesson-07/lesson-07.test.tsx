import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Lesson07 } from './lesson-07'

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('Lesson07', () => {
  it('should render the lesson content', () => {
    render(<Lesson07 />)
    
    expect(screen.getByText('Lesson 07: Coming Soon')).toBeInTheDocument()
  })

  it('should have a link back to home', () => {
    render(<Lesson07 />)
    
    const homeLink = screen.getByText('← Back to Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })
})
