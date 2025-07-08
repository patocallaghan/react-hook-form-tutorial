# Lesson 5: Form State Management

## Overview

Learn to manage form state dynamically using React Hook Form's `watch`, `setValue`, `reset`, and `getValues` methods. This lesson covers reactive form behavior and programmatic form control.

## Learning Objectives

- Monitor form field changes with `watch`
- Programmatically update form values with `setValue`
- Reset form state with `reset`
- Handle dependent fields and conditional logic
- Implement form auto-save functionality

## Prerequisites

- Completion of Lesson 4 (Schema Validation with Zod)
- Understanding of React useEffect hook
- Basic knowledge of form state concepts

## Official Documentation

- [watch](https://react-hook-form.com/docs/useform/watch)
- [setValue](https://react-hook-form.com/docs/useform/setvalue)
- [reset](https://react-hook-form.com/docs/useform/reset)
- [getValues](https://react-hook-form.com/docs/useform/getvalues)

## Task Description

Create a dynamic product configuration form with reactive behavior:

### Form Fields

- **Product Type** (select: laptop, desktop, tablet)
- **Brand** (select: depends on product type)
- **Model** (select: depends on brand)
- **Quantity** (number input)
- **Price** (readonly, calculated)
- **Configuration** (conditional fields based on product type)
- **Shipping Address** (group of fields)
- **Billing Same as Shipping** (checkbox)
- **Billing Address** (conditional group)

### Interactive Features

- Dependent dropdown updates
- Real-time price calculation
- Auto-save to localStorage
- Form reset functionality
- Address copying logic
- Configuration preview

## Implementation Steps

1. **Set up form with initial values**

   ```tsx
   const defaultValues = {
     productType: '',
     brand: '',
     model: '',
     quantity: 1,
     price: 0,
     // ... other fields
   };

   const { watch, setValue, reset, getValues, register } = useForm({
     defaultValues,
     mode: 'onChange',
   });
   ```

2. **Watch specific fields for changes**

   ```tsx
   const productType = watch('productType');
   const brand = watch('brand');
   const quantity = watch('quantity');
   const billingSameAsShipping = watch('billingSameAsShipping');

   // Watch all form values
   const formValues = watch();
   ```

3. **Implement dependent dropdowns**

   ```tsx
   const getBrandsForProductType = (type: string) => {
     const brandOptions = {
       laptop: ['Apple', 'Dell', 'HP', 'Lenovo'],
       desktop: ['Dell', 'HP', 'Custom Build'],
       tablet: ['Apple', 'Samsung', 'Microsoft'],
     };
     return brandOptions[type] || [];
   };

   useEffect(() => {
     if (productType) {
       setValue('brand', ''); // Reset dependent field
       setValue('model', '');
       setValue('price', 0);
     }
   }, [productType, setValue]);
   ```

4. **Calculate price dynamically**

   ```tsx
   useEffect(() => {
     const calculatePrice = () => {
       const { productType, brand, model, quantity } = getValues();

       if (productType && brand && model && quantity) {
         const basePrice = getBasePrice(productType, brand, model);
         const totalPrice = basePrice * quantity;
         setValue('price', totalPrice);
       }
     };

     calculatePrice();
   }, [productType, brand, watch('model'), quantity]);
   ```

5. **Implement auto-save functionality**

   ```tsx
   useEffect(() => {
     const subscription = watch((value, { name, type }) => {
       if (type === 'change') {
         const timeout = setTimeout(() => {
           localStorage.setItem('productForm', JSON.stringify(value));
           console.log('Form auto-saved');
         }, 1000); // Debounce auto-save

         return () => clearTimeout(timeout);
       }
     });

     return () => subscription.unsubscribe();
   }, [watch]);
   ```

6. **Handle address copying**

   ```tsx
   useEffect(() => {
     if (billingSameAsShipping) {
       const shippingAddress = getValues([
         'shippingAddress.street',
         'shippingAddress.city',
         'shippingAddress.state',
         'shippingAddress.zipCode',
       ]);

       setValue('billingAddress.street', shippingAddress[0]);
       setValue('billingAddress.city', shippingAddress[1]);
       setValue('billingAddress.state', shippingAddress[2]);
       setValue('billingAddress.zipCode', shippingAddress[3]);
     }
   }, [billingSameAsShipping, getValues, setValue]);
   ```

7. **Add form reset functionality**

   ```tsx
   const handleReset = () => {
     reset(defaultValues);
     localStorage.removeItem('productForm');
   };

   const handleLoadSaved = () => {
     const saved = localStorage.getItem('productForm');
     if (saved) {
       const parsedData = JSON.parse(saved);
       reset(parsedData);
     }
   };
   ```

## Expected Outcome

- A dynamic form with reactive field updates
- Dependent dropdowns that update based on selections
- Real-time price calculation
- Auto-save functionality with localStorage
- Address copying between shipping and billing
- Form reset and load saved state capabilities

## Key Concepts Covered

- **watch()**: Monitoring form field changes
- **setValue()**: Programmatically updating form values
- **reset()**: Resetting form to initial or specific state
- **getValues()**: Reading current form values
- **Dependent fields**: Creating cascading form logic
- **Form persistence**: Auto-save and restore functionality
- **Reactive forms**: Building forms that respond to user input

## Watch Patterns to Implement

- Single field watching: `watch('fieldName')`
- Multiple fields: `watch(['field1', 'field2'])`
- All fields: `watch()`
- Subscription pattern: `watch((data, { name, type }) => {})`

## Common Pitfalls

- Not unsubscribing from watch subscriptions
- Causing infinite loops with setValue in useEffect
- Forgetting to handle dependent field resets
- Not debouncing auto-save operations
- Overusing watch for simple state needs

## Testing Requirements

Your implementation should pass these tests:

- Dependent dropdowns update correctly
- Price calculation works for all scenarios
- Auto-save triggers after changes
- Address copying functions properly
- Form reset clears all fields
- Watch subscriptions don't cause memory leaks

## Next Steps

After completing this lesson, you'll move to Lesson 6: Dynamic Fields, where you'll learn to use `useFieldArray` for managing dynamic form arrays.
