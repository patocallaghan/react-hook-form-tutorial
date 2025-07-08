import { Link } from 'react-router';

export function Lesson10() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lesson 10: Advanced Validation
        </h1>
        <p className="text-lg text-gray-600">
          Master async validation, server-side validation, and custom validation
          modes for complex scenarios.
        </p>
        <a
          href="https://react-hook-form.com/docs/useform#validation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: validation
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a user account validation form with async email checking:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Username (async availability check)</li>
          <li>Email (async duplicate check against API)</li>
          <li>Password (complex validation with strength meter)</li>
          <li>Confirm Password (must match, with real-time feedback)</li>
          <li>Phone Number (async format validation)</li>
          <li>Security Questions (conditional validation)</li>
          <li>Two-Factor Authentication setup (conditional)</li>
        </ul>
        <p className="text-gray-700">
          Implement{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">
            async validation
          </code>
          , <code className="bg-gray-100 px-2 py-1 rounded">setError</code> for
          server errors, and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">trigger</code> for
          manual validation.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Account Validation Form</h2>

        {/* TODO: Implement the advanced validation form */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement advanced validation with async
            checks
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Set up form with async validation mode</li>
              <li>Implement async username availability check</li>
              <li>Create email duplicate validation with API call</li>
              <li>Add password strength validation with visual feedback</li>
              <li>Implement real-time password confirmation</li>
              <li>Add phone number format validation</li>
              <li>Handle server-side validation errors</li>
              <li>Implement manual validation triggers</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
