import { useState } from "react";

function Gromuse() {
  const [cartCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-15 pt-2">
        <div className="bg-[rgb(13,85,44)] rounded-2xl px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3 text-white">
            <span className="text-2xl cursor-pointer">☰</span>
            <h1 className="text-2xl font-bold">GreenLeaf Mart</h1>
          </div>

          <div className="hidden md:flex bg-white rounded-full px-4 py-2 items-center w-[420px]">
            <input
              type="text"
              placeholder="Search for Grocery..."
              className="outline-none w-full text-sm p-1 bg-transparent"
            />
            <span className="text-gray-500 text-lg">🔍</span>
          </div>

          <div className="flex items-center gap-5 text-white">
            <p className="hidden lg:block font-medium">
              ⚡ Order now and get it within 15 min!
            </p>

            <div className="relative bg-white p-2 rounded-full cursor-pointer">
              <span className="text-[#005a57] text-xl">🛒</span>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>

        </div>
      </nav>
    </>
  );
}

export default Gromuse;