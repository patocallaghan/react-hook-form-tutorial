import { Link } from 'react-router'

export function Lesson09() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lesson 9: Performance Optimization
        </h1>
        <p className="text-lg text-gray-600">
          Learn to optimize form performance using useWatch for selective subscriptions and minimizing re-renders.
        </p>
        <a
          href="https://react-hook-form.com/docs/usewatch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: useWatch
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a high-performance dashboard form with conditional rendering:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>User preferences panel (theme, language, notifications)</li>
          <li>Dashboard widgets configuration (show/hide various widgets)</li>
          <li>Chart settings (conditional based on widget selection)</li>
          <li>Performance metrics display</li>
          <li>Auto-save with debouncing</li>
          <li>Conditional field rendering based on selections</li>
          <li>Optimized re-render tracking</li>
        </ul>
        <p className="text-gray-700">
          Use <code className="bg-gray-100 px-2 py-1 rounded">useWatch</code> for selective subscriptions and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">React.memo</code> for component optimization.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Performance Dashboard</h2>
        
        {/* TODO: Implement the performance-optimized dashboard */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement performance-optimized form using useWatch
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Import useWatch and implement selective subscriptions</li>
              <li>Create memoized components to prevent unnecessary re-renders</li>
              <li>Implement conditional rendering based on form state</li>
              <li>Add performance monitoring and render counting</li>
              <li>Use useWatch for specific field monitoring</li>
              <li>Implement debounced auto-save</li>
              <li>Optimize form validation triggers</li>
              <li>Add performance metrics display</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
