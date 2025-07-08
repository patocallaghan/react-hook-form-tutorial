import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Lesson06 } from './lesson-06'

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('Lesson06', () => {
  it('should render the lesson content', () => {
    render(<Lesson06 />)
    
    expect(screen.getByText('Lesson 06: Coming Soon')).toBeInTheDocument()
  })

  it('should have a link back to home', () => {
    render(<Lesson06 />)
    
    const homeLink = screen.getByText('← Back to Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })
})
