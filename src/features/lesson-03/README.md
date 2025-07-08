# Lesson 3: Error Handling

## Overview

Master advanced error handling techniques in React Hook Form, including form state management, error aggregation, and user-friendly error display patterns.

## Learning Objectives

- Understand `formState` object in detail
- Implement comprehensive error handling
- Create reusable error components
- Handle server-side errors
- Manage form submission states

## Prerequisites

- Completion of Lesson 2 (Form Validation)
- Understanding of React component patterns

## Official Documentation

- [formState](https://react-hook-form.com/docs/useform/formstate)
- [setError](https://react-hook-form.com/docs/useform/seterror)
- [clearErrors](https://react-hook-form.com/docs/useform/clearerrors)
- [Error handling](https://react-hook-form.com/docs/advanced-usage#ErrorHandling)

## Task Description

Create a login form with comprehensive error handling:

### Form Fields

- **Email** (email input, required)
- **Password** (password input, required)
- **Remember Me** (checkbox, optional)

### Error Handling Features

- Field-level validation errors
- Form-level error summary
- Server-side error simulation
- Loading states during submission
- Success/failure feedback
- Error persistence and clearing

## Implementation Steps

1. **Extract comprehensive form state**

   ```tsx
   const {
     register,
     handleSubmit,
     formState: { errors, isSubmitting, isValid, isDirty, touchedFields },
     setError,
     clearErrors,
   } = useForm({ mode: 'onChange' });
   ```

2. **Create error display component**

   ```tsx
   const ErrorMessage = ({ error }: { error?: FieldError }) => {
     if (!error) return null;
     return <p className="text-red-500 text-sm mt-1">{error.message}</p>;
   };
   ```

3. **Implement form-level error summary**

   ```tsx
   const ErrorSummary = ({ errors }: { errors: FieldErrors }) => {
     const errorFields = Object.keys(errors);
     if (errorFields.length === 0) return null;

     return (
       <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
         <h3 className="text-red-800 font-medium mb-2">
           Please fix the following errors:
         </h3>
         <ul className="text-red-700 text-sm">
           {errorFields.map((field) => (
             <li key={field}>• {errors[field]?.message}</li>
           ))}
         </ul>
       </div>
     );
   };
   ```

4. **Handle server-side errors**

   ```tsx
   const onSubmit = async (data) => {
     try {
       clearErrors();
       const response = await fetch('/api/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
       });

       if (!response.ok) {
         const errorData = await response.json();
         // Set server errors
         if (errorData.field) {
           setError(errorData.field, { message: errorData.message });
         } else {
           setError('root', { message: errorData.message });
         }
         return;
       }

       // Handle success
       console.log('Login successful');
     } catch (error) {
       setError('root', { message: 'Network error. Please try again.' });
     }
   };
   ```

5. **Implement loading and disabled states**
   ```tsx
   <button
     type="submit"
     disabled={!isValid || isSubmitting}
     className={`w-full py-2 px-4 rounded font-medium ${
       isSubmitting
         ? 'bg-gray-400 cursor-not-allowed'
         : 'bg-blue-600 hover:bg-blue-700 text-white'
     }`}
   >
     {isSubmitting ? 'Signing in...' : 'Sign In'}
   </button>
   ```

## Expected Outcome

- A login form with comprehensive error handling
- Real-time validation feedback
- Server-side error simulation
- Loading states and user feedback
- Error summary and field-specific errors
- Clean error clearing and management

## Key Concepts Covered

- **formState properties**: `errors`, `isSubmitting`, `isValid`, `isDirty`, `touchedFields`
- **Error manipulation**: `setError`, `clearErrors`
- **Error types**: Field errors, form errors, server errors
- **User experience**: Loading states, disabled buttons, feedback messages
- **Error persistence**: When and how to clear errors
- **Accessibility**: Proper error announcement and focus management

## Form State Properties to Use

- `errors`: Field and form-level errors
- `isSubmitting`: Form submission state
- `isValid`: Overall form validity
- `isDirty`: Whether form has been modified
- `touchedFields`: Which fields have been interacted with
- `isSubmitSuccessful`: Whether submission succeeded

## Common Pitfalls

- Not clearing errors before new submissions
- Forgetting to handle network errors
- Poor error message UX (too technical, not actionable)
- Not providing loading feedback during submission
- Mixing client and server error handling inconsistently

## Testing Requirements

Your implementation should pass these tests:

- Field validation errors display correctly
- Form-level error summary works
- Server error simulation functions
- Loading states prevent double submission
- Error clearing works properly
- Success states are handled correctly

## Next Steps

After completing this lesson, you'll move to Lesson 4: Schema Validation with Zod, where you'll learn to use external validation libraries for more robust validation.
