/* ----------------------------------------------------------------------------
   Gromuse hero — deep-green rounded card with its own top bar, flowing
   contour-line decorations, the headline + "Shop now" CTA, and the
   overflowing grocery-bag imagery.
---------------------------------------------------------------------------- */

function LeafLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 3c0 8-5 13-12 13-1.2 0-2.3-.2-3.3-.5C5.4 8.6 11 4 20 3Z"
        fill="#bfe04f"
      />
      <path
        d="M4 21c0-5 3.5-9 9-10.5"
        stroke="#7fae2e"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#bfe04f" aria-hidden="true">
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

/* A green reusable tote, white cart emblem, overflowing with fresh produce. */
function GroceryBag() {
  return (
    <svg
      viewBox="0 0 420 440"
      fill="none"
      className="w-[320px] max-w-full md:w-[430px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bagBody" x1="80" y1="160" x2="360" y2="430" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3aa564" />
          <stop offset="1" stopColor="#1f7a44" />
        </linearGradient>
        <linearGradient id="bagShade" x1="80" y1="160" x2="80" y2="430" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="0.25" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bread" x1="150" y1="40" x2="320" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e8b765" />
          <stop offset="1" stopColor="#c98e3c" />
        </linearGradient>
        <linearGradient id="milk" x1="250" y1="70" x2="300" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fdfdfd" />
          <stop offset="1" stopColor="#dfe7ee" />
        </linearGradient>
        <ellipse id="floret" cx="0" cy="0" rx="13" ry="11" />
      </defs>

      {/* ground shadow */}
      <ellipse cx="215" cy="420" rx="150" ry="20" fill="#000000" opacity="0.18" />

      {/* ---- produce poking out behind the bag rim ---- */}
      {/* baguette */}
      <g transform="rotate(-24 250 110)">
        <rect x="190" y="70" width="150" height="34" rx="17" fill="url(#bread)" />
        <g stroke="#a9742c" strokeWidth="2.4" strokeLinecap="round" opacity="0.7">
          <path d="M235 78l-9 18" />
          <path d="M258 76l-9 18" />
          <path d="M281 76l-9 18" />
          <path d="M304 78l-9 18" />
        </g>
      </g>

      {/* milk / juice carton */}
      <g>
        <path d="M252 96h44v118a8 8 0 0 1-8 8h-28a8 8 0 0 1-8-8V96Z" fill="url(#milk)" />
        <path d="M252 96l22-18 22 18H252Z" fill="#eaf0f5" />
        <rect x="262" y="128" width="24" height="34" rx="3" fill="#7ec6a0" />
        <path d="M252 96h44" stroke="#cdd8e2" strokeWidth="2" />
      </g>

      {/* celery / leafy greens */}
      <g>
        <path d="M150 150c-14-34-6-74 8-96" stroke="#2f9d57" strokeWidth="13" strokeLinecap="round" />
        <path d="M168 150c-6-40 4-78 20-98" stroke="#37b163" strokeWidth="13" strokeLinecap="round" />
        <path d="M186 152c4-40 22-72 44-86" stroke="#2f9d57" strokeWidth="13" strokeLinecap="round" />
        <g fill="#9ad06f">
          <circle cx="156" cy="52" r="14" />
          <circle cx="188" cy="44" r="15" />
          <circle cx="226" cy="58" r="14" />
          <circle cx="206" cy="40" r="12" />
        </g>
      </g>

      {/* broccoli */}
      <g transform="translate(120 120)">
        <rect x="-6" y="6" width="14" height="30" rx="6" fill="#9ccb7a" />
        <g fill="#2f8f4f">
          <use href="#floret" x="-12" y="2" />
          <use href="#floret" x="10" y="2" />
          <use href="#floret" x="0" y="-8" />
          <use href="#floret" x="-4" y="10" />
        </g>
      </g>

      {/* carrots */}
      <g transform="rotate(18 320 150)">
        <path d="M312 120l16 70-22 6-10-72 16-4Z" fill="#f0871e" />
        <path d="M320 122l14 62-18 5-8-64 12-3Z" fill="#f59d3c" opacity="0.7" />
        <g stroke="#3aa564" strokeWidth="5" strokeLinecap="round">
          <path d="M310 120l-10-20" />
          <path d="M320 120l4-22" />
          <path d="M328 122l16-16" />
        </g>
      </g>

      {/* tomato */}
      <circle cx="178" cy="150" r="22" fill="#e8483a" />
      <circle cx="170" cy="142" r="6" fill="#ff7a6e" opacity="0.6" />
      <path d="M178 130l-6-8m6 8l6-8m-6 8v-9" stroke="#3aa564" strokeWidth="3" strokeLinecap="round" />

      {/* ---- the bag ---- */}
      {/* handles */}
      <path d="M150 170c0-44 16-70 40-70" stroke="#176638" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M300 170c0-44-16-70-40-70" stroke="#176638" strokeWidth="10" fill="none" strokeLinecap="round" />

      {/* body */}
      <path
        d="M104 176h242l-16 224a18 18 0 0 1-18 17H138a18 18 0 0 1-18-17L104 176Z"
        fill="url(#bagBody)"
      />
      <path
        d="M104 176h242l-16 224a18 18 0 0 1-18 17H138a18 18 0 0 1-18-17L104 176Z"
        fill="url(#bagShade)"
      />
      {/* rim */}
      <rect x="98" y="166" width="254" height="22" rx="11" fill="#2a8f51" />
      {/* fold lines */}
      <g stroke="#176638" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round">
        <path d="M168 196l-8 210" />
        <path d="M225 198v210" />
        <path d="M282 196l8 210" />
      </g>

      {/* white shopping-cart emblem */}
      <g transform="translate(225 300)" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M-34 -26h13l9 46a6 6 0 0 0 6 5h33a6 6 0 0 0 6-5l7-32h-58" />
        <circle cx="-4" cy="34" r="4.5" fill="#ffffff" stroke="none" />
        <circle cx="28" cy="34" r="4.5" fill="#ffffff" stroke="none" />
      </g>
    </svg>
  );
}

/* Flowing topographic contour lines that drift across the card. */
function FlowyShapes() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 460"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {/* large soft halo behind the bag */}
      <circle cx="980" cy="250" r="300" fill="#ffffff" opacity="0.04" />
      <circle cx="980" cy="250" r="210" fill="#ffffff" opacity="0.04" />

      {/* sweeping contour lines, bottom-left → right */}
      <g stroke="#ffffff" strokeOpacity="0.16" strokeWidth="1.5" fill="none">
        <path d="M-40 360 C 220 300, 380 470, 640 380 S 1040 250, 1260 320" />
        <path d="M-40 400 C 230 345, 390 510, 660 420 S 1060 295, 1260 360" />
        <path d="M-40 300 C 200 250, 360 410, 600 320 S 1000 200, 1260 270" />
      </g>

      {/* tighter flowing loop, lower-left corner */}
      <g stroke="#bfe04f" strokeOpacity="0.22" strokeWidth="1.5" fill="none">
        <path d="M60 470 C 90 360, 230 330, 250 230 S 150 110, 40 150" />
        <path d="M110 470 C 140 370, 280 345, 300 250 S 205 135, 95 170" />
      </g>

      {/* faint top swooshes */}
      <g stroke="#ffffff" strokeOpacity="0.10" strokeWidth="1.5" fill="none">
        <path d="M520 -20 C 620 60, 540 150, 700 170 S 980 120, 1180 30" />
        <path d="M560 -40 C 660 40, 580 130, 740 150 S 1020 100, 1220 10" />
      </g>

      {/* scattered dots */}
      <g fill="#ffffff" fillOpacity="0.12">
        <circle cx="150" cy="120" r="2.5" />
        <circle cx="470" cy="70" r="2" />
        <circle cx="360" cy="250" r="2" />
        <circle cx="840" cy="400" r="2.5" />
      </g>
    </svg>
  );
}

function Hero() {
  return (
    <section className="px-4 py-6 md:px-8 md:py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#1d5b3f] bg-gradient-to-br from-[#1f6044] via-[#1c5539] to-[#143f2a] shadow-2xl shadow-emerald-900/30">
        <FlowyShapes />

        {/* ---------------- Top bar ---------------- */}
        <div className="relative z-10 flex items-center gap-3 px-5 pt-5 md:gap-4 md:px-8 md:pt-7">
          {/* menu + logo */}
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Menu"
          >
            <MenuIcon />
          </button>
          <div className="flex shrink-0 items-center gap-1.5 pr-1">
            <LeafLogo />
            <span className="text-[19px] font-semibold tracking-tight text-white">
              Gromuse
            </span>
          </div>

          {/* search */}
          <label className="ml-1 flex h-11 flex-1 items-center gap-2.5 rounded-xl bg-white px-4 text-slate-400 shadow-sm">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for Grocery, Stores, Vegetables or Meat"
              className="w-full bg-transparent text-sm text-slate-600 placeholder:text-slate-400 focus:outline-none"
            />
          </label>

          {/* order pill */}
          <div className="hidden items-center gap-2 rounded-xl bg-black/20 px-4 py-2.5 text-[13px] font-medium text-white/90 lg:flex">
            <BoltIcon />
            <span>
              Order now and get it within{" "}
              <span className="font-semibold text-[#bfe04f]">15 min!</span>
            </span>
          </div>

          {/* cart */}
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ffb74d] to-[#f59e2c] shadow-md shadow-orange-900/20 transition hover:brightness-105"
            aria-label="Cart"
          >
            <CartIcon />
          </button>

          {/* avatar */}
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="Account"
            className="h-10 w-10 shrink-0 rounded-full border-2 border-white/30 object-cover"
          />
        </div>

        {/* ---------------- Hero body ---------------- */}
        <div className="relative z-10 grid items-center gap-6 px-5 pb-4 pt-10 md:grid-cols-[1.1fr_1fr] md:px-12 md:pb-0 md:pt-14">
          {/* copy */}
          <div className="max-w-lg">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[52px]">
              We bring the store
              <br />
              to your door
            </h1>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-emerald-100/70">
              Get organic produce and sustainably sourced groceries delivery at
              up to 4% off grocery.
            </p>
            <button
              type="button"
              className="mt-8 rounded-xl bg-[#bfe04f] px-8 py-3.5 text-[15px] font-semibold text-[#15402a] shadow-lg shadow-lime-400/20 transition hover:bg-[#c8e85f] active:scale-[0.98]"
            >
              Shop now
            </button>
          </div>

          {/* imagery */}
          <div className="relative flex justify-center md:justify-end">
            <GroceryBag />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
