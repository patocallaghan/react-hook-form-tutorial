import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Lesson01 } from './lesson-01'

// Mock react-router
const mockNavigate = vi.fn()
vi.mock('react-router', () => ({
  Link: ({ to, children, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}))

describe('Lesson01', () => {
  it('should render the lesson content', () => {
    render(<Lesson01 />)
    
    expect(screen.getByText('Lesson 1: Basic Form Setup')).toBeInTheDocument()
    expect(screen.getByText('Contact Form')).toBeInTheDocument()
  })

  it('should show TODO message initially', () => {
    render(<Lesson01 />)
    
    expect(screen.getByText(/TODO:/)).toBeInTheDocument()
    expect(screen.getByText(/Implement the contact form using React Hook Form/)).toBeInTheDocument()
  })

  it('should have a link back to home', () => {
    render(<Lesson01 />)
    
    const homeLink = screen.getByText('← Back to Home')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })

  it('should have a link to official docs', () => {
    render(<Lesson01 />)
    
    const docsLink = screen.getByText('📖 Read the docs: useForm')
    expect(docsLink).toBeInTheDocument()
    expect(docsLink.closest('a')).toHaveAttribute('href', 'https://react-hook-form.com/docs/useform')
  })

  // TODO: Add tests for the actual form functionality once implemented
  // These tests should check:
  // - Form renders with name, email, message fields
  // - Form submission works correctly
  // - Required field validation
  // - handleSubmit is called with correct data
})