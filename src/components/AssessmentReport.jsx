function AssessmentReport() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Disc Assessment Report</h2>
      <div className="space-y-4">
        <div>
          <input type="file" className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Upload Report
        </button>
        <div className="mt-4">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Download Previous Report
          </a>
        </div>
      </div>
    </section>
  );
}

export default AssessmentReport; 