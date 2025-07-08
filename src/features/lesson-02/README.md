# Lesson 2: Form Validation

## Overview
Learn how to implement form validation using React Hook Form's built-in validation rules and custom validation functions.

## Learning Objectives
- Understand built-in validation rules
- Create custom validation functions
- Display validation errors
- Handle form state during validation

## Prerequisites
- Completion of Lesson 1 (Basic Form Setup)
- Understanding of form validation concepts

## Official Documentation
- [register validation](https://react-hook-form.com/docs/useform/register#validation)
- [formState](https://react-hook-form.com/docs/useform/formstate)
- [validation rules](https://react-hook-form.com/docs/useform/register#validation-rules)

## Task Description
Create a user profile form with comprehensive validation:

### Form Fields
- **Username** (text input)
  - Required
  - Minimum 3 characters
  - Maximum 20 characters
  - Only alphanumeric characters
- **Email** (email input)
  - Required
  - Valid email format
- **Phone** (tel input)
  - Required
  - Custom validation for phone format
- **Website** (url input)
  - Optional
  - Valid URL format when provided
- **Bio** (textarea)
  - Optional
  - Maximum 500 characters

### Validation Requirements
- Show error messages for each field
- Validate on blur and submit
- Prevent submission if form is invalid
- Display field-specific error styling

## Implementation Steps

1. **Set up form with validation mode**
   ```tsx
   const { register, handleSubmit, formState: { errors } } = useForm({
     mode: 'onBlur'
   })
   ```

2. **Add built-in validation rules**
   ```tsx
   {...register('username', {
     required: 'Username is required',
     minLength: {
       value: 3,
       message: 'Username must be at least 3 characters'
     },
     maxLength: {
       value: 20,
       message: 'Username must not exceed 20 characters'
     },
     pattern: {
       value: /^[A-Za-z0-9]+$/,
       message: 'Username can only contain letters and numbers'
     }
   })}
   ```

3. **Create custom validation function**
   ```tsx
   const validatePhone = (value) => {
     const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
     return phoneRegex.test(value) || 'Please enter a valid phone number'
   }
   ```

4. **Display error messages**
   ```tsx
   {errors.username && (
     <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
   )}
   ```

5. **Style invalid fields**
   ```tsx
   className={`border rounded px-3 py-2 ${
     errors.username ? 'border-red-500' : 'border-gray-300'
   }`}
   ```

## Expected Outcome
- A comprehensive form with multiple validation rules
- Real-time validation feedback
- Clear error messages for each field
- Proper error styling and user experience
- Understanding of validation timing and modes

## Key Concepts Covered
- Built-in validation rules (required, minLength, maxLength, pattern)
- Custom validation functions
- Error handling and display
- Validation modes (onSubmit, onBlur, onChange)
- Form state management during validation
- Conditional styling based on validation state

## Validation Rules to Implement
- **Required**: Field must have a value
- **MinLength/MaxLength**: String length validation
- **Pattern**: Regular expression validation
- **Custom**: Custom validation logic
- **Conditional**: Optional field validation

## Common Pitfalls
- Not providing meaningful error messages
- Forgetting to check `errors` object for field errors
- Using incorrect validation mode for UX
- Not styling invalid fields appropriately
- Validating optional fields incorrectly

## Testing Requirements
Your implementation should pass these tests:
- All validation rules work correctly
- Error messages display at appropriate times
- Form prevents submission when invalid
- Valid data submits successfully
- Error styling applies correctly

## Next Steps
After completing this lesson, you'll be ready for Lesson 3: Error Handling, where you'll learn advanced error management techniques.