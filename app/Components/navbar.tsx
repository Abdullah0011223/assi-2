import Link from "next/link";

function Nav() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-8 text-white">
          <li className="nav-item">
            <Link href="/" className="hover:text-indigo-200 transition duration-300">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="hover:text-indigo-200 transition duration-300">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="hover:text-indigo-200 transition duration-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
