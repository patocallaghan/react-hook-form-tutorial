import { Link } from 'react-router';

export function Lesson11() {
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
          Lesson 11: File Uploads
        </h1>
        <p className="text-lg text-gray-600">
          Handle file inputs, file validation, preview, and upload progress with
          React Hook Form.
        </p>
        <a
          href="https://react-hook-form.com/docs/useform/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-blue-600 hover:text-blue-800"
        >
          📖 Read the docs: register
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="text-gray-700 mb-4">
          Create a profile setup form with avatar upload and document
          attachments:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Avatar Upload (single image, with preview and cropping)</li>
          <li>Resume/CV Upload (PDF only, size validation)</li>
          <li>Portfolio Images (multiple images, drag and drop)</li>
          <li>Cover Letter (text or PDF upload)</li>
          <li>File validation (type, size, dimensions)</li>
          <li>Upload progress indicators</li>
          <li>File preview and removal</li>
          <li>Drag and drop functionality</li>
        </ul>
        <p className="text-gray-700">
          Use file input{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">register</code> with
          custom validation and{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">watch</code> for file
          preview.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Profile Setup with File Upload
        </h2>

        {/* TODO: Implement the file upload form */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            <strong>TODO:</strong> Implement file upload form with validation
            and preview
          </p>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Steps to complete:</p>
            <ol className="list-decimal list-inside mt-1 space-y-1">
              <li>Register file inputs with proper validation</li>
              <li>Implement file type and size validation</li>
              <li>Create image preview components</li>
              <li>Add drag and drop functionality</li>
              <li>Implement upload progress tracking</li>
              <li>Create file removal functionality</li>
              <li>Add image cropping for avatar</li>
              <li>Handle multiple file selections</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
