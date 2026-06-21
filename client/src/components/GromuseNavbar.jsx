/* ----------------------------------------------------------------------------
   Gromuse top navigation bar — standalone, full-width.
   Built to match the reference exactly.
---------------------------------------------------------------------------- */

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="m20 20-3.2-3.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#bfe04f" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.2L21 8H6"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="20" r="1.5" fill="#fff" />
      <circle cx="17.5" cy="20" r="1.5" fill="#fff" />
    </svg>
  );
}

function GromuseNavbar() {
  return (
    <nav className="flex w-full items-center gap-5 bg-[#14463c] px-[5%] py-3.5">
      {/* left — menu + logo */}
      <button
        type="button"
        className="text-white/90 transition hover:text-white"
        aria-label="Menu"
      >
        <MenuIcon />
      </button>

      <div className="flex shrink-0 items-center gap-1.5">
        <img src="/logo.png" alt="Gromuse" className="h-8 w-8 object-contain" />
        <span className="text-[20px] font-semibold tracking-tight text-white">
          Gromuse
        </span>
      </div>

      {/* center — search (icon at the end, pill corners) */}
      <div className="flex flex-1 justify-center px-4">
        <label className="flex h-10 w-full max-w-xl items-center gap-2.5 rounded-full bg-white px-5 text-slate-400">
          <input
            type="text"
            placeholder="Search for Grocery, Stores, Vegetables or Meat"
            className="w-full bg-transparent text-[13px] text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <SearchIcon />
        </label>
      </div>

      {/* right — order note + cart + avatar */}
      <div className="flex shrink-0 items-center gap-4">
        <div className="flex items-center gap-2 text-[13px] font-medium text-white">
          <BoltIcon />
          <span>
            Order now and get it within{" "}
            <span className="font-semibold text-[#bfe04f]">15 min!</span>
          </span>
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#ffb74d] to-[#f59e2c] shadow-md shadow-orange-900/20 transition hover:brightness-105"
          aria-label="Cart"
        >
          <CartIcon />
        </button>

        <img
          src="https://i.pravatar.cc/80?img=12"
          alt="Account"
          className="h-9 w-9 rounded-full border-2 border-white/30 object-cover"
        />
      </div>
    </nav>
  );
}

export default GromuseNavbar;
