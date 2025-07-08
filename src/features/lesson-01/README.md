# Lesson 1: Basic Form Setup

## Overview
Learn the fundamentals of React Hook Form by creating a simple contact form. This lesson covers the core concepts of `useForm`, `register`, and `handleSubmit`.

## Learning Objectives
- Understand the basic React Hook Form workflow
- Learn how to register form fields
- Handle form submission
- Display form data

## Prerequisites
- Basic React knowledge
- Understanding of React hooks
- TypeScript basics

## Official Documentation
- [useForm](https://react-hook-form.com/docs/useform)
- [register](https://react-hook-form.com/docs/useform/register)
- [handleSubmit](https://react-hook-form.com/docs/useform/handlesubmit)

## Task Description
Create a contact form with the following requirements:

### Form Fields
- **Name** (text input, required)
- **Email** (email input, required)
- **Message** (textarea, required)

### Functionality
- Form submission should log the data to console
- Use React Hook Form's `register` function for each field
- Use `handleSubmit` to process the form
- Display a success message after submission

## Implementation Steps

1. **Import React Hook Form**
   ```tsx
   import { useForm } from 'react-hook-form'
   ```

2. **Set up the hook**
   ```tsx
   const { register, handleSubmit, formState } = useForm()
   ```

3. **Create the form structure**
   - Add form element with `onSubmit={handleSubmit(onSubmit)}`
   - Register each input with `{...register('fieldName', { required: true })}`

4. **Handle form submission**
   ```tsx
   const onSubmit = (data) => {
     console.log('Form data:', data)
   }
   ```

5. **Style with Tailwind CSS**
   - Use consistent spacing and styling
   - Make the form responsive
   - Add focus states and proper accessibility

## Expected Outcome
- A functional contact form that collects user input
- Form data logged to console on submission
- Clean, accessible form styling
- Understanding of basic React Hook Form concepts

## Key Concepts Covered
- `useForm()` hook initialization
- `register()` function for field registration
- `handleSubmit()` for form processing
- Basic form validation (required fields)
- TypeScript integration with React Hook Form

## Common Pitfalls
- Forgetting to spread the register function: `{...register('name')}`
- Not using handleSubmit wrapper for onSubmit
- Missing form element wrapper around inputs
- Not preventing default form submission behavior

## Testing Requirements
Your implementation should pass these tests:
- Form renders with all required fields
- Form submission works correctly
- Console logs the correct data structure
- Form has proper accessibility attributes

## Next Steps
After completing this lesson, you'll be ready to move on to Lesson 2: Form Validation, where you'll learn about validation rules and error handling.