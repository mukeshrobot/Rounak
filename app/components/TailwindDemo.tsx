export default function TailwindDemo() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Tailwind CSS Demo
            </h1>
            <p className="text-gray-600 mb-6">
              This component uses only Tailwind CSS classes. If you can see this styled content, 
              Tailwind is working correctly!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Responsive Design
                </h3>
                <p className="text-blue-700 text-sm">
                  This card should be responsive and look good on all screen sizes.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Color System
                </h3>
                <p className="text-green-700 text-sm">
                  Tailwind&apos;s color palette is working correctly.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Primary Button
              </button>
              
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Secondary Button
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="text-yellow-900 font-semibold mb-2">Status Check</h4>
              <p className="text-yellow-800 text-sm">
                ✅ Tailwind CSS is properly configured and working!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 