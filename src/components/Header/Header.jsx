import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="mx-auto px-8 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-blue-600">Book Vibe</div>

        {/* Center: Navigation Links */}
        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listed-books"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pages-to-read"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Pages to Read
          </NavLink>
        </nav>

        {/* Right: Buttons */}
        <div className="space-x-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Sign In
          </button>
          <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
