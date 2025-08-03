export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-600 mb-6">
          If you can see this styled card with a gradient background, Tailwind CSS is working correctly!
        </p>
        <div className="space-y-4">
          <div className="bg-blue-100 border border-blue-300 rounded-md p-4">
            <h3 className="text-blue-800 font-semibold">Success!</h3>
            <p className="text-blue-700 text-sm">Tailwind CSS is properly configured and working.</p>
          </div>
          <div className="bg-green-100 border border-green-300 rounded-md p-4">
            <h3 className="text-green-800 font-semibold">Classes Working</h3>
            <p className="text-green-700 text-sm">All utility classes are functioning correctly.</p>
          </div>
          <div className="bg-yellow-100 border border-yellow-300 rounded-md p-4">
            <h3 className="text-yellow-800 font-semibold">Responsive Design</h3>
            <p className="text-yellow-700 text-sm">This should be responsive on different screen sizes.</p>
          </div>
        </div>
        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
          Test Button
        </button>
      </div>
    </div>
  );
} 