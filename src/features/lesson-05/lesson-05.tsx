import { Link } from 'react-router';

export function Lesson05() {
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
          Lesson 5: Form State Management
        </h1>
        <p className="text-lg text-gray-600">
          Learn to manage form state dynamically using watch, setValue, reset,
          and getValues methods.
        </p>
        <a
          href="https://react-hook-form.com/docs/useform/watch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: watch
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a dynamic product configuration form with reactive behavior:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Product Type (select: laptop, desktop, tablet)</li>
          <li>Brand (select: depends on product type)</li>
          <li>Model (select: depends on brand)</li>
          <li>Quantity (number input)</li>
          <li>Price (readonly, calculated automatically)</li>
          <li>Shipping Address (group of fields)</li>
          <li>Billing Same as Shipping (checkbox)</li>
          <li>
            Billing Address (conditional, shown when checkbox is unchecked)
          </li>
        </ul>
        <p className="text-gray-700">
          Use <code className="bg-gray-100 px-2 py-1 rounded">watch</code>,{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">setValue</code>, and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">reset</code> for
          dynamic behavior.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Product Configuration Form
        </h2>

        {/* TODO: Implement the dynamic product form here */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement the dynamic product configuration
            form
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>
                Import useForm, watch, setValue, reset, getValues from
                react-hook-form
              </li>
              <li>Set up form with default values for all fields</li>
              <li>Create dependent dropdowns (product type → brand → model)</li>
              <li>Implement real-time price calculation based on selections</li>
              <li>Add shipping address fields</li>
              <li>Implement billing address toggle and copying logic</li>
              <li>Add form reset functionality</li>
              <li>Implement auto-save to localStorage</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
