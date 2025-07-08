import { Link } from 'react-router'

export function Lesson12() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lesson 12: Form Submission & API Integration
        </h1>
        <p className="text-lg text-gray-600">
          Implement real-world form submission with API integration, error handling, and loading states using MSW mocks.
        </p>
        <a
          href="https://react-hook-form.com/docs/useform/handlesubmit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: handleSubmit
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a contact form with comprehensive API submission handling:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Contact Information (name, email, phone, company)</li>
          <li>Message Type (support, sales, partnership)</li>
          <li>Priority Level (low, medium, high, urgent)</li>
          <li>Message Content (with character count)</li>
          <li>File Attachments (optional)</li>
          <li>API submission with MSW mocking</li>
          <li>Loading states and success/error handling</li>
          <li>Form reset after successful submission</li>
        </ul>
        <p className="text-gray-700">
          Use <code className="bg-gray-100 px-2 py-1 rounded">handleSubmit</code> with API calls,{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">isSubmitting</code> for loading states, and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">setError</code> for server errors.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Form with API Integration</h2>
        
        {/* TODO: Implement the API-integrated contact form */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement contact form with API integration and MSW mocks
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Set up form with proper validation schema</li>
              <li>Implement handleSubmit with API call</li>
              <li>Use MSW handlers for API mocking</li>
              <li>Handle loading states with isSubmitting</li>
              <li>Implement success and error feedback</li>
              <li>Add server-side error handling</li>
              <li>Create form reset functionality</li>
              <li>Add submission progress indicators</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
