import { Link } from 'react-router'

export function Lesson02() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lesson 2: Form Validation
        </h1>
        <p className="text-lg text-gray-600">
          Learn how to implement form validation using React Hook Form's built-in validation rules and custom validation functions.
        </p>
        <a
          href="https://react-hook-form.com/docs/useform/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: register validation
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a user profile form with comprehensive validation:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Username (required, 3-20 chars, alphanumeric only)</li>
          <li>Email (required, valid email format)</li>
          <li>Phone (required, custom validation for phone format)</li>
          <li>Website (optional, valid URL when provided)</li>
          <li>Bio (optional, max 500 characters)</li>
        </ul>
        <p className="text-gray-700">
          Use built-in validation rules like <code className="bg-gray-100 px-2 py-1 rounded">required</code>,{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">minLength</code>,{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">pattern</code>, and custom validation functions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">User Profile Form</h2>
        
        {/* TODO: Implement the user profile form with validation */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement the user profile form with comprehensive validation
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Import useForm and set validation mode to "onBlur"</li>
              <li>Add username field with required, minLength, maxLength, and pattern validation</li>
              <li>Implement email field with required and email pattern validation</li>
              <li>Create phone field with custom validation function</li>
              <li>Add optional website field with URL validation</li>
              <li>Implement bio textarea with character limit</li>
              <li>Display error messages for each field</li>
              <li>Style invalid fields with red borders</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
