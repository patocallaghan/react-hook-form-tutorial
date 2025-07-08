import { Link } from 'react-router';

const lessons = [
  {
    id: 1,
    title: 'Basic Form Setup',
    description:
      'Introduction to useForm hook, simple form with register and handleSubmit',
    docs: 'https://react-hook-form.com/docs/useform',
    path: '/lesson-01',
  },
  {
    id: 2,
    title: 'Form Validation',
    description: 'Built-in validation rules and custom validation functions',
    docs: 'https://react-hook-form.com/docs/useform/register',
    path: '/lesson-02',
  },
  {
    id: 3,
    title: 'Error Handling',
    description: 'Displaying validation errors and formState management',
    docs: 'https://react-hook-form.com/docs/useform/formstate',
    path: '/lesson-03',
  },
  {
    id: 4,
    title: 'Schema Validation with Zod',
    description: 'Integrating Zod resolver for complex validation schemas',
    docs: 'https://react-hook-form.com/docs/useform/resolver',
    path: '/lesson-04',
  },
  {
    id: 5,
    title: 'Form State Management',
    description: 'watch, setValue, reset methods and form state lifecycle',
    docs: 'https://react-hook-form.com/docs/useform/watch',
    path: '/lesson-05',
  },
  {
    id: 6,
    title: 'Dynamic Fields',
    description: 'useFieldArray for dynamic form fields and array manipulation',
    docs: 'https://react-hook-form.com/docs/usefieldarray',
    path: '/lesson-06',
  },
  {
    id: 7,
    title: 'Controlled Components',
    description:
      'useController for custom components and UI library integration',
    docs: 'https://react-hook-form.com/docs/usecontroller',
    path: '/lesson-07',
  },
  {
    id: 8,
    title: 'Form Context',
    description: 'useFormContext for nested components and shared form state',
    docs: 'https://react-hook-form.com/docs/useformcontext',
    path: '/lesson-08',
  },
  {
    id: 9,
    title: 'Performance Optimization',
    description:
      'useWatch for selective subscriptions and minimizing re-renders',
    docs: 'https://react-hook-form.com/docs/usewatch',
    path: '/lesson-09',
  },
  {
    id: 10,
    title: 'Advanced Validation',
    description:
      'Async validation, server-side validation, and custom validation modes',
    docs: 'https://react-hook-form.com/docs/useform#validation',
    path: '/lesson-10',
  },
  {
    id: 11,
    title: 'File Uploads',
    description: 'Handling file inputs and file validation',
    docs: 'https://react-hook-form.com/docs/useform/register',
    path: '/lesson-11',
  },
  {
    id: 12,
    title: 'Form Submission & API Integration',
    description:
      'Form submission with MSW mocks, error handling, and loading states',
    docs: 'https://react-hook-form.com/docs/useform/handlesubmit',
    path: '/lesson-12',
  },
];

export function HomePage() {
  return (
    <div className="px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          React Hook Form Tutorial
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn React Hook Form step by step, from basic forms to advanced
          features. Each lesson builds on the previous one with hands-on
          exercises and tests.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Lesson {lesson.id}
              </span>
              <a
                href={lesson.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                📖 Docs
              </a>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {lesson.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>

            <Link
              to={lesson.path}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Start Lesson
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
