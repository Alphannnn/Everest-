import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-white text-[#04393B]'
      : 'text-white hover:bg-white/10'
  }`;

function Navbar() {
  return (
    <header className="bg-[#04393B] shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-white tracking-tight"
        >
          🏔️ Everest
        </NavLink>

        {/* Links */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
