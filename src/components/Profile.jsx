function Profile() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-red-500 hover:text-blue-500 transition-all duration-300">John Doe's Profile</h2>
          <p className="text-gray-600 mt-2">Student ID: #12345</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Bio</h3>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Upload Handwritten Bio</label>
              <input type="file" className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile; 