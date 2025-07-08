# Lesson 4: Schema Validation with Zod

## Overview

Learn to integrate Zod with React Hook Form for powerful, type-safe schema validation. This lesson covers creating complex validation schemas and leveraging TypeScript integration.

## Learning Objectives

- Understand schema-based validation
- Create and use Zod schemas
- Integrate `zodResolver` with React Hook Form
- Leverage TypeScript for type safety
- Handle complex validation scenarios

## Prerequisites

- Completion of Lesson 3 (Error Handling)
- Basic TypeScript knowledge
- Understanding of validation concepts

## Official Documentation

- [zodResolver](https://react-hook-form.com/docs/resolvers/zod)
- [Zod documentation](https://zod.dev/)
- [TypeScript with React Hook Form](https://react-hook-form.com/ts)

## Task Description

Create a comprehensive user registration form with Zod schema validation:

### Form Fields

- **Username** (required, 3-20 chars, alphanumeric only)
- **Email** (required, valid email format)
- **Password** (required, min 8 chars, must contain uppercase, lowercase, number, special char)
- **Confirm Password** (required, must match password)
- **Age** (required, number, 18-120)
- **Country** (required, select from predefined list)
- **Terms** (required checkbox)
- **Newsletter** (optional checkbox)

### Validation Requirements

- Use Zod schema for all validation
- Proper TypeScript types
- Custom error messages
- Conditional validation
- Password strength requirements

## Implementation Steps

1. **Install and import dependencies**

   ```tsx
   import { useForm } from 'react-hook-form';
   import { zodResolver } from '@hookform/resolvers/zod';
   import { z } from 'zod';
   ```

2. **Create Zod schema**

   ```tsx
   const registrationSchema = z
     .object({
       username: z
         .string()
         .min(3, 'Username must be at least 3 characters')
         .max(20, 'Username must not exceed 20 characters')
         .regex(
           /^[a-zA-Z0-9]+$/,
           'Username can only contain letters and numbers'
         ),

       email: z.string().email('Please enter a valid email address'),

       password: z
         .string()
         .min(8, 'Password must be at least 8 characters')
         .regex(
           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
           'Password must contain uppercase, lowercase, number, and special character'
         ),

       confirmPassword: z.string(),

       age: z
         .number({ invalid_type_error: 'Age must be a number' })
         .min(18, 'You must be at least 18 years old')
         .max(120, 'Please enter a valid age'),

       country: z.string().min(1, 'Please select a country'),

       terms: z
         .boolean()
         .refine(
           (val) => val === true,
           'You must accept the terms and conditions'
         ),

       newsletter: z.boolean().optional(),
     })
     .refine((data) => data.password === data.confirmPassword, {
       message: 'Passwords do not match',
       path: ['confirmPassword'],
     });

   type RegistrationForm = z.infer<typeof registrationSchema>;
   ```

3. **Set up form with zodResolver**

   ```tsx
   const {
     register,
     handleSubmit,
     formState: { errors, isSubmitting },
     watch,
   } = useForm<RegistrationForm>({
     resolver: zodResolver(registrationSchema),
     mode: 'onBlur',
   });
   ```

4. **Implement form fields with proper typing**

   ```tsx
   <input
     type="text"
     {...register('username')}
     className={`border rounded px-3 py-2 ${
       errors.username ? 'border-red-500' : 'border-gray-300'
     }`}
   />;
   {
     errors.username && (
       <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
     );
   }
   ```

5. **Add password strength indicator**

   ```tsx
   const PasswordStrength = ({ password }: { password: string }) => {
     const requirements = [
       { regex: /.{8,}/, text: 'At least 8 characters' },
       { regex: /[A-Z]/, text: 'Uppercase letter' },
       { regex: /[a-z]/, text: 'Lowercase letter' },
       { regex: /\d/, text: 'Number' },
       { regex: /[@$!%*?&]/, text: 'Special character' },
     ];

     return (
       <div className="mt-2">
         <p className="text-sm text-gray-600 mb-1">Password requirements:</p>
         <ul className="text-xs space-y-1">
           {requirements.map((req, index) => (
             <li
               key={index}
               className={`${
                 req.regex.test(password) ? 'text-green-600' : 'text-red-500'
               }`}
             >
               {req.regex.test(password) ? '✓' : '✗'} {req.text}
             </li>
           ))}
         </ul>
       </div>
     );
   };
   ```

6. **Handle form submission with type safety**
   ```tsx
   const onSubmit = (data: RegistrationForm) => {
     console.log('Registration data:', data);
     // Data is fully typed and validated
   };
   ```

## Expected Outcome

- A comprehensive registration form with Zod validation
- Full TypeScript integration and type safety
- Complex validation rules and custom error messages
- Password strength indicator
- Proper form state management
- Clean, maintainable validation logic

## Key Concepts Covered

- **Zod schema creation**: String, number, boolean, enum validations
- **Schema composition**: Object schemas and nested validation
- **Custom validation**: `refine` method for complex rules
- **TypeScript integration**: Type inference with `z.infer`
- **zodResolver**: Connecting Zod with React Hook Form
- **Error message customization**: User-friendly validation messages
- **Conditional validation**: Cross-field validation

## Advanced Zod Features to Explore

- `z.enum()` for select options
- `z.optional()` for optional fields
- `z.refine()` for custom validation
- `z.transform()` for data transformation
- `z.union()` for multiple valid types
- `z.array()` for array validation

## Common Pitfalls

- Not using `z.infer` for TypeScript types
- Forgetting to handle numeric inputs properly
- Complex regex patterns without clear error messages
- Not validating checkbox acceptance correctly
- Mixing built-in and schema validation

## Testing Requirements

Your implementation should pass these tests:

- All Zod validations work correctly
- TypeScript compilation succeeds
- Password confirmation validation works
- Age validation handles edge cases
- Form submission provides typed data
- Error messages are user-friendly

## Next Steps

After completing this lesson, you'll move to Lesson 5: Form State Management, where you'll learn to watch form values and programmatically update form state.
