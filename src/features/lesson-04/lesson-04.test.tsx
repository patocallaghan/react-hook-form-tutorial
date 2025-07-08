import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Lesson04 } from './lesson-04'

// Mock react-router
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('Lesson04', () => {
  it('should render the lesson content', () => {
    render(<Lesson04 />)
    
    expect(screen.getByText('Lesson 4: Schema Validation with Zod')).toBeInTheDocument()
    expect(screen.getByText('Registration Form')).toBeInTheDocument()
  })

  it('should show TODO message initially', () => {
    render(<Lesson04 />)
    
    expect(screen.getByText(/TODO:/)).toBeInTheDocument()
    expect(screen.getByText(/Implement the registration form using Zod schema validation/)).toBeInTheDocument()
  })

  it('should have a link back to home', () => {
    render(<Lesson04 />)
    
    const homeLink = screen.getByText('← Back to Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })

  it('should have a link to official docs', () => {
    render(<Lesson04 />)
    
    const docsLink = screen.getByText('📖 Read the docs: resolver')
    expect(docsLink).toBeInTheDocument()
    expect(docsLink.closest('a')).toHaveAttribute('href', 'https://react-hook-form.com/docs/useform/resolver')
  })

  // TODO: Add tests for the actual form functionality once implemented
  // These tests should check:
  // - Form renders with all required fields
  // - Zod schema validation works correctly
  // - Password confirmation validation
  // - Age validation (min/max)
  // - Username format validation
  // - Terms checkbox requirement
  // - Form submission with valid data
})