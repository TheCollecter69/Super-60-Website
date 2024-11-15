function DevelopmentNotes() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Development Notes</h2>
      <textarea
        className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter development notes here..."
      ></textarea>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Save Notes
      </button>
    </section>
  );
}

export default DevelopmentNotes; 