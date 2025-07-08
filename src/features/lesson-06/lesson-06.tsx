import { Link } from 'react-router';

export function Lesson06() {
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
          Lesson 6: Dynamic Fields
        </h1>
        <p className="text-lg text-gray-600">
          Master dynamic form fields using useFieldArray for creating, updating,
          and managing arrays of form fields.
        </p>
        <a
          href="https://react-hook-form.com/docs/usefieldarray"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: useFieldArray
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a dynamic contact list form with the following features:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Company Name (text input)</li>
          <li>
            Contacts (dynamic array with validation):
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Name (required)</li>
              <li>Email (required, valid email)</li>
              <li>Phone (required)</li>
              <li>Role (select from predefined options)</li>
              <li>Primary Contact (radio button, only one selected)</li>
            </ul>
          </li>
          <li>Add/Remove Contact buttons</li>
          <li>Drag and drop reordering</li>
        </ul>
        <p className="text-gray-700">
          Use{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">useFieldArray</code>{' '}
          with <code className="bg-gray-100 px-2 py-1 rounded">append</code>,{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">remove</code>, and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">move</code> methods.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Dynamic Contact List</h2>

        {/* TODO: Implement the dynamic contact form here */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement the dynamic contact list using
            useFieldArray
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Import useForm and useFieldArray from react-hook-form</li>
              <li>Set up form with contacts array in default values</li>
              <li>Use useFieldArray to manage the contacts array</li>
              <li>Create contact form template with validation</li>
              <li>Implement add/remove contact functionality</li>
              <li>Handle primary contact selection (radio group)</li>
              <li>Add bulk operations (clear all, duplicate)</li>
              <li>Ensure at least one contact exists</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
