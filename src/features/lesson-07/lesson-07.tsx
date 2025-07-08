import { Link } from 'react-router';

export function Lesson07() {
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
          Lesson 7: Controlled Components
        </h1>
        <p className="text-lg text-gray-600">
          Learn to integrate React Hook Form with controlled components using
          useController for custom components and UI libraries.
        </p>
        <a
          href="https://react-hook-form.com/docs/usecontroller"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: useController
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a survey form with custom controlled components:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Survey Title (text input)</li>
          <li>Overall Rating (custom star rating component)</li>
          <li>Interested Topics (multi-select with search)</li>
          <li>Event Date Range (custom date range picker)</li>
          <li>Feedback (rich text editor)</li>
          <li>Attachments (drag-and-drop file upload)</li>
          <li>Budget Range (custom slider component)</li>
        </ul>
        <p className="text-gray-700">
          Use{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">useController</code>{' '}
          to create reusable controlled components with proper error handling.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Survey Form with Custom Components
        </h2>

        {/* TODO: Implement the survey form with controlled components */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement custom controlled components using
            useController
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Import useController from react-hook-form</li>
              <li>Create custom Rating component with useController</li>
              <li>Build MultiSelect component with search functionality</li>
              <li>Implement DateRangePicker with validation</li>
              <li>Create RichTextEditor component</li>
              <li>Build FileUpload with drag-and-drop</li>
              <li>Implement SliderRange component</li>
              <li>Handle error states in all components</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
