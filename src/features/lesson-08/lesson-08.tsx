import { Link } from 'react-router';

export function Lesson08() {
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
          Lesson 8: Form Context
        </h1>
        <p className="text-lg text-gray-600">
          Learn to share form state across multiple components using
          useFormContext for nested component communication.
        </p>
        <a
          href="https://react-hook-form.com/docs/useformcontext"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: useFormContext
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a multi-step user onboarding form with shared form context:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Step 1: Personal Information (name, email, phone)</li>
          <li>Step 2: Address Information (shipping, billing)</li>
          <li>Step 3: Preferences (notifications, theme, language)</li>
          <li>Step 4: Review and Submit</li>
          <li>Progress indicator showing current step</li>
          <li>Navigation between steps with validation</li>
          <li>Form state persistence across steps</li>
        </ul>
        <p className="text-gray-700">
          Use{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">FormProvider</code>{' '}
          and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">useFormContext</code>{' '}
          to share form state across multiple components.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Multi-Step Onboarding Form
        </h2>

        {/* TODO: Implement the multi-step form with context */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement multi-step form using FormProvider
            and useFormContext
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>
                Import FormProvider and useFormContext from react-hook-form
              </li>
              <li>Create main form component with FormProvider wrapper</li>
              <li>Build individual step components using useFormContext</li>
              <li>Implement step navigation with validation</li>
              <li>Create progress indicator component</li>
              <li>Add step-specific validation rules</li>
              <li>Implement form persistence across steps</li>
              <li>Create review step showing all collected data</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
