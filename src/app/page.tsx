import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Welcome to my Homepage</h1>
      <div className="flex gap-4">
        
        <Link href="/client-side-fetching">
          <p className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Client Side
          </p>
        </Link>
       
        <Link href="/server-side-fetching">
          <p className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Server Side
          </p>
        </Link>
      </div>
    </div>
  );
}

