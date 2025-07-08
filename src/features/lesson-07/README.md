# Lesson 7: Controlled Components

## Overview
Learn to integrate React Hook Form with controlled components using `useController`. This lesson covers creating custom form components and integrating with UI libraries.

## Learning Objectives
- Understand controlled vs uncontrolled components
- Use `useController` for controlled components
- Create reusable form components
- Integrate with UI libraries
- Handle complex component state

## Prerequisites
- Completion of Lesson 6 (Dynamic Fields)
- Understanding of React controlled components
- Basic knowledge of component composition

## Official Documentation
- [useController](https://react-hook-form.com/docs/usecontroller)
- [Controller](https://react-hook-form.com/docs/usecontroller/controller)
- [Controlled Components](https://react-hook-form.com/docs/advanced-usage#ControlledComponents)

## Task Description
Create a survey form with custom controlled components:

### Custom Components to Build
- **Rating Component** (star rating with hover effects)
- **Multi-Select Component** (checkbox group with search)
- **Date Range Picker** (start and end date selection)
- **Rich Text Editor** (basic formatting controls)
- **File Upload** (drag and drop with preview)
- **Slider Range** (min/max value selection)

### Form Fields
- **Survey Title** (text input)
- **Overall Rating** (custom star rating)
- **Interested Topics** (multi-select checkboxes)
- **Event Date Range** (date range picker)
- **Feedback** (rich text editor)
- **Attachments** (file upload)
- **Budget Range** (slider range)

## Implementation Steps

1. **Create controlled Rating component**
   ```tsx
   import { useController } from 'react-hook-form'
   
   interface RatingProps {
     name: string
     control: Control<any>
     label: string
     maxRating?: number
   }
   
   const Rating = ({ name, control, label, maxRating = 5 }: RatingProps) => {
     const {
       field: { onChange, value },
       fieldState: { error }
     } = useController({
       name,
       control,
       defaultValue: 0
     })
   
     return (
       <div>
         <label className="block text-sm font-medium mb-2">{label}</label>
         <div className="flex">
           {[...Array(maxRating)].map((_, index) => (
             <Star
               key={index}
               filled={index < value}
               onClick={() => onChange(index + 1)}
               onMouseEnter={() => setHovered(index + 1)}
               onMouseLeave={() => setHovered(0)}
             />
           ))}
         </div>
         {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
       </div>
     )
   }
   ```

2. **Create MultiSelect component**
   ```tsx
   const MultiSelect = ({ name, control, options, label }: MultiSelectProps) => {
     const {
       field: { onChange, value = [] },
       fieldState: { error }
     } = useController({
       name,
       control,
       defaultValue: []
     })
   
     const [searchTerm, setSearchTerm] = useState('')
     const filteredOptions = options.filter(option =>
       option.label.toLowerCase().includes(searchTerm.toLowerCase())
     )
   
     const handleChange = (optionValue: string) => {
       const newValue = value.includes(optionValue)
         ? value.filter(v => v \!== optionValue)
         : [...value, optionValue]
       onChange(newValue)
     }
   
     return (
       <div>
         <label className="block text-sm font-medium mb-2">{label}</label>
         <input
           type="text"
           placeholder="Search options..."
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           className="w-full p-2 border rounded mb-2"
         />
         <div className="max-h-40 overflow-y-auto border rounded p-2">
           {filteredOptions.map((option) => (
             <label key={option.value} className="flex items-center mb-1">
               <input
                 type="checkbox"
                 checked={value.includes(option.value)}
                 onChange={() => handleChange(option.value)}
                 className="mr-2"
               />
               {option.label}
             </label>
           ))}
         </div>
         {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
       </div>
     )
   }
   ```

3. **Create DateRangePicker component**
   ```tsx
   const DateRangePicker = ({ name, control, label }: DateRangeProps) => {
     const {
       field: { onChange, value = { start: '', end: '' } },
       fieldState: { error }
     } = useController({
       name,
       control,
       defaultValue: { start: '', end: '' }
     })
   
     return (
       <div>
         <label className="block text-sm font-medium mb-2">{label}</label>
         <div className="flex gap-2">
           <input
             type="date"
             value={value.start}
             onChange={(e) => onChange({ ...value, start: e.target.value })}
             className="flex-1 p-2 border rounded"
           />
           <span className="flex items-center">to</span>
           <input
             type="date"
             value={value.end}
             min={value.start}
             onChange={(e) => onChange({ ...value, end: e.target.value })}
             className="flex-1 p-2 border rounded"
           />
         </div>
         {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
       </div>
     )
   }
   ```

4. **Use components in form**
   ```tsx
   const SurveyForm = () => {
     const { control, handleSubmit } = useForm({
       defaultValues: {
         title: '',
         rating: 0,
         topics: [],
         dateRange: { start: '', end: '' },
         feedback: '',
         attachments: [],
         budgetRange: { min: 0, max: 100 }
       }
     })
   
     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register('title')} placeholder="Survey Title" />
         
         <Rating
           name="rating"
           control={control}
           label="Overall Rating"
           maxRating={5}
         />
         
         <MultiSelect
           name="topics"
           control={control}
           label="Interested Topics"
           options={topicOptions}
         />
         
         <DateRangePicker
           name="dateRange"
           control={control}
           label="Event Date Range"
         />
         
         {/* Other components... */}
       </form>
     )
   }
   ```

## Expected Outcome
- A survey form with custom controlled components
- Proper integration with React Hook Form
- Reusable components with error handling
- Good user experience with interactive elements
- Type-safe component props and values

## Key Concepts Covered
- `useController` hook for controlled components
- Custom component creation with form integration
- Error handling in controlled components
- Component composition and reusability
- State management in controlled components

## Common Pitfalls
- Not using defaultValue in useController
- Forgetting to handle error states
- Not optimizing controlled component re-renders
- Missing accessibility features
- Poor component API design

## Testing Requirements
Your implementation should pass these tests:
- All controlled components work correctly
- Error states display properly
- Component values update form state
- Components are accessible
- Form submission includes all component values

## Next Steps
After completing this lesson, you'll move to Lesson 8: Form Context, where you'll learn to share form state across multiple components using `useFormContext`.
EOF < /dev/null