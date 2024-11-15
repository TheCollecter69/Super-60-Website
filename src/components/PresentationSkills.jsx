function PresentationSkills() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Presentation Skills Assessment</h2>
      <div className="space-y-4">
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter presentation skills assessment..."
        ></textarea>
        <div className="flex justify-between items-center">
          <div className="space-x-2">
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
              Communication
            </span>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Confidence
            </span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Save Assessment
          </button>
        </div>
      </div>
    </section>
  );
}

export default PresentationSkills; 