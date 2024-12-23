import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-white text-xl font-semibold">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <p className="text-white px-4 py-2 rounded hover:bg-blue-500">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/client-side-fetching">
              <p className="text-white px-4 py-2 rounded hover:bg-blue-500">Client Side</p>
            </Link>
          </li>
          <li>
            <Link href="/server-side-fetching">
              <p className="text-white px-4 py-2 rounded hover:bg-blue-500">Server Side</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
