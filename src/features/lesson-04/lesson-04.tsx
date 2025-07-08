import { Link } from 'react-router'

export function Lesson04() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lesson 4: Schema Validation with Zod
        </h1>
        <p className="text-lg text-gray-600">
          Learn how to integrate Zod resolver for powerful schema validation with React Hook Form.
        </p>
        <a
          href="https://react-hook-form.com/docs/useform/resolver"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: resolver
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a user registration form with complex validation using Zod schema:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Username (required, min 3 characters, alphanumeric only)</li>
          <li>Email (required, valid email format)</li>
          <li>Password (required, min 8 characters, must contain uppercase, lowercase, number)</li>
          <li>Confirm Password (required, must match password)</li>
          <li>Age (required, number, min 18, max 120)</li>
          <li>Terms acceptance (required checkbox)</li>
        </ul>
        <p className="text-gray-700">
          Use <code className="bg-gray-100 px-2 py-1 rounded">zodResolver</code> from{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">@hookform/resolvers/zod</code> with a Zod schema.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
        
        {/* TODO: Implement the registration form with Zod validation */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement the registration form using Zod schema validation
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Import z from zod and zodResolver from @hookform/resolvers/zod</li>
              <li>Create a Zod schema for all form fields</li>
              <li>Use zodResolver in useForm configuration</li>
              <li>Add form fields with appropriate validation</li>
              <li>Display validation errors for each field</li>
              <li>Handle form submission with type-safe data</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}