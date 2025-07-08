import { Link } from 'react-router'

export function Lesson12() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lesson 12: Coming Soon
        </h1>
        <p className="text-lg text-gray-600">
          This lesson is under development. Please check back later.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Under Development</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">
            This lesson will be available soon. In the meantime, you can check out the other lessons.
          </p>
        </div>
      </div>
    </div>
  )
}
