import { Link } from 'react-router'

export function Lesson01() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lesson 1: Basic Form Setup
        </h1>
        <p className="text-lg text-gray-600">
          Learn the basics of React Hook Form with useForm hook, register, and handleSubmit.
        </p>
        <a
          href="https://react-hook-form.com/docs/useform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: useForm
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a simple contact form using React Hook Form. The form should have:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Name field (required)</li>
          <li>Email field (required)</li>
          <li>Message field (required)</li>
          <li>Submit button</li>
        </ul>
        <p className="text-gray-700">
          Use the <code className="bg-gray-100 px-2 py-1 rounded">useForm</code> hook with{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">register</code> and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">handleSubmit</code>.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
        
        {/* TODO: Implement the contact form here */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement the contact form using React Hook Form
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Import useForm from react-hook-form</li>
              <li>Set up the form with register and handleSubmit</li>
              <li>Add form fields for name, email, and message</li>
              <li>Handle form submission</li>
              <li>Add basic styling with Tailwind CSS</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}