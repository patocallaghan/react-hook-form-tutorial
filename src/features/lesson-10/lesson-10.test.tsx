import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Lesson10 } from './lesson-10'

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('Lesson10', () => {
  it('should render the lesson content', () => {
    render(<Lesson10 />)
    
    expect(screen.getByText('Lesson 10: Coming Soon')).toBeInTheDocument()
  })

  it('should have a link back to home', () => {
    render(<Lesson10 />)
    
    const homeLink = screen.getByText('← Back to Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })
})
