# Lesson 6: Dynamic Fields

## Overview

Master dynamic form fields using React Hook Form's `useFieldArray` hook. Learn to create, update, and manage arrays of form fields with proper validation and user experience.

## Learning Objectives

- Use `useFieldArray` for dynamic field management
- Add and remove form fields dynamically
- Validate array fields properly
- Handle complex nested form structures
- Implement drag-and-drop reordering

## Prerequisites

- Completion of Lesson 5 (Form State Management)
- Understanding of React arrays and keys
- Basic knowledge of drag-and-drop concepts

## Official Documentation

- [useFieldArray](https://react-hook-form.com/docs/usefieldarray)
- [Dynamic Fields](https://react-hook-form.com/docs/advanced-usage#DynamicFields)

## Task Description

Create a dynamic contact list form with the following features:

### Form Structure

- **Company Name** (text input)
- **Contacts** (dynamic array of contact objects)
  - Name (required)
  - Email (required, valid email)
  - Phone (required)
  - Role (select from predefined options)
  - Primary Contact (radio button, only one can be selected)
- **Add Contact** button
- **Remove Contact** button for each contact
- **Reorder Contacts** (drag and drop)

### Features to Implement

- Add new contacts dynamically
- Remove contacts with confirmation
- Validate each contact individually
- Ensure at least one contact exists
- Handle primary contact selection
- Reorder contacts via drag and drop
- Bulk operations (clear all, duplicate contact)

## Implementation Steps

1. **Set up useFieldArray**

   ```tsx
   import { useFieldArray } from 'react-hook-form';

   const { fields, append, remove, move, swap } = useFieldArray({
     control,
     name: 'contacts',
   });
   ```

2. **Create contact form template**

   ```tsx
   const defaultContact = {
     name: '',
     email: '',
     phone: '',
     role: '',
     isPrimary: false,
   };

   const addContact = () => {
     append(defaultContact);
   };
   ```

3. **Render dynamic contact fields**

   ```tsx
   {
     fields.map((field, index) => (
       <div key={field.id} className="border rounded p-4 mb-4">
         <div className="flex justify-between items-center mb-2">
           <h3 className="font-medium">Contact {index + 1}</h3>
           <button
             type="button"
             onClick={() => remove(index)}
             className="text-red-600 hover:text-red-800"
           >
             Remove
           </button>
         </div>

         <div className="grid grid-cols-2 gap-4">
           <input
             {...register(`contacts.${index}.name`, {
               required: 'Name is required',
             })}
             placeholder="Name"
           />

           <input
             {...register(`contacts.${index}.email`, {
               required: 'Email is required',
               pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                 message: 'Invalid email format',
               },
             })}
             placeholder="Email"
           />

           {/* More fields... */}
         </div>
       </div>
     ));
   }
   ```

4. **Handle primary contact selection**

   ```tsx
   const handlePrimaryChange = (selectedIndex: number) => {
     fields.forEach((_, index) => {
       setValue(`contacts.${index}.isPrimary`, index === selectedIndex);
     });
   };
   ```

5. **Implement drag and drop reordering**

   ```tsx
   const onDragEnd = (result: DropResult) => {
     if (\!result.destination) return

     move(result.source.index, result.destination.index)
   }
   ```

6. **Add bulk operations**

   ```tsx
   const duplicateContact = (index: number) => {
     const contactData = getValues(`contacts.${index}`);
     append({ ...contactData, isPrimary: false });
   };

   const clearAllContacts = () => {
     if (window.confirm('Are you sure you want to remove all contacts?')) {
       fields.forEach((_, index) => remove(index));
     }
   };
   ```

## Expected Outcome

- Dynamic contact form with add/remove functionality
- Proper validation for each contact
- Primary contact selection logic
- Drag-and-drop reordering
- Bulk operations for better UX
- Proper form state management

## Key Concepts Covered

- `useFieldArray` hook usage
- Dynamic field validation
- Array manipulation (append, remove, move)
- Field keys for React reconciliation
- Nested form structures
- Complex form state management

## Common Pitfalls

- Not using field.id as React key
- Forgetting to validate minimum array length
- Not handling primary selection properly
- Missing confirmation for destructive actions
- Poor accessibility for dynamic content

## Testing Requirements

Your implementation should pass these tests:

- Can add and remove contacts
- Validation works for each contact
- Primary contact selection is exclusive
- Drag and drop reordering works
- Bulk operations function correctly
- Form submission includes all contacts

## Next Steps

After completing this lesson, you'll move to Lesson 7: Controlled Components, where you'll learn to integrate React Hook Form with custom components and UI libraries.
EOF < /dev/null
