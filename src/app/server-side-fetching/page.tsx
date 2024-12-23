import React from 'react'

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/")
  const parsedResponse: Book[] = await response.json()

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 flex justify-center">Server Side Data Fetching</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {parsedResponse.map((book, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border border-gray-300 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <p className="text-gray-900 text-xl font-bold"><strong>name:</strong> {book.name}</p>
            <p className="text-gray-700 font-medium"><strong>id:</strong> {book.id}</p>
            <p className="text-gray-700 font-medium"><strong>type:</strong> {book.type}</p>
            <p className="text-gray-700 font-medium">
              <strong>available:</strong>{' '}
              <button
                className={`px-3 py-1 rounded-full text-white font-semibold ${
                  book.available ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {book.available ? 'Yes' : 'No'}
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
