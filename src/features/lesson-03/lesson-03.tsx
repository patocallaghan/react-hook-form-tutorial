import { Link } from 'react-router'

export function Lesson03() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lesson 3: Error Handling
        </h1>
        <p className="text-lg text-gray-600">
          Master advanced error handling techniques including form state management, error aggregation, and server-side error simulation.
        </p>
        <a
          href="https://react-hook-form.com/docs/useform/formstate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: formState
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a login form with comprehensive error handling:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Email (required, valid email format)</li>
          <li>Password (required, minimum 8 characters)</li>
          <li>Remember Me (optional checkbox)</li>
          <li>Form-level error summary</li>
          <li>Server-side error simulation</li>
          <li>Loading states during submission</li>
          <li>Success/failure feedback</li>
        </ul>
        <p className="text-gray-700">
          Use <code className="bg-gray-100 px-2 py-1 rounded">formState</code> properties,{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">setError</code>, and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">clearErrors</code> for comprehensive error management.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Login Form with Error Handling</h2>
        
        {/* TODO: Implement the login form with comprehensive error handling */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement comprehensive error handling for the login form
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Import useForm with formState, setError, and clearErrors</li>
              <li>Set up form with mode: "onChange" for real-time validation</li>
              <li>Create ErrorMessage component for reusable error display</li>
              <li>Implement ErrorSummary component for form-level errors</li>
              <li>Add server-side error simulation in handleSubmit</li>
              <li>Handle loading states with isSubmitting</li>
              <li>Implement proper error clearing before new submissions</li>
              <li>Add disabled button states and loading indicators</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
