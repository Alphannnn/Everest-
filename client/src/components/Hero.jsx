function Hero() {
  return (
    <section className="mt-6">
      <div
        className="
          group
          max-w-[1450px]
          mx-auto
          mt-5
          h-[430px]
          bg-green-900
          relative
          rounded-3xl
          overflow-hidden
          flex
          items-center
          justify-between
          px-12
          shadow-[0_20px_60px_-15px_rgba(6,78,59,0.6)]
          ring-1 ring-white/10
        "
        style={{ clipPath: 'url(#heroWave)' }}
      >
        {/* Smooth, gently rounded bottom edge (responsive via objectBoundingBox units) */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <clipPath id="heroWave" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.02,0
                 L 0.98,0
                 Q 1,0 1,0.055
                 L 1,0.74
                 C 1,0.88 0.92,0.9 0.8,0.92
                 C 0.68,0.94 0.6,0.96 0.5,0.96
                 C 0.4,0.96 0.32,0.94 0.2,0.92
                 C 0.08,0.9 0,0.88 0,0.74
                 L 0,0.055
                 Q 0,0 0.02,0
                 Z"
            />
          </clipPath>
        </svg>
        {/* Ambient gradient sheen — soft greens only */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(120% 120% at 15% 0%, rgba(52,211,153,0.18) 0%, transparent 45%), radial-gradient(120% 120% at 100% 100%, rgba(34,197,94,0.35) 0%, transparent 50%)',
          }}
        />

        {/* Faint dotted grid — soft playful texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        {/* Floating playful blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute left-[8%] top-[18%] h-16 w-16 rounded-full bg-emerald-400/20 blur-xl [animation:float1_7s_ease-in-out_infinite,glow-pulse_5s_ease-in-out_infinite]" />
          <span className="absolute left-[40%] top-[60%] h-24 w-24 rounded-full bg-green-400/10 blur-2xl animate-[float2_9s_ease-in-out_infinite]" />
          <span className="absolute right-[30%] top-[12%] h-10 w-10 rounded-full bg-lime-300/20 blur-lg animate-[float3_6s_ease-in-out_infinite]" />
        </div>

        {/* Gentle game-like accents */}
        <span className="pointer-events-none absolute top-8 right-[46%] text-xl animate-[float3_6s_ease-in-out_infinite] select-none">🍃</span>
        <span className="pointer-events-none absolute bottom-24 left-[38%] text-lg animate-[float2_9s_ease-in-out_infinite] select-none">✨</span>

        {/* Left Content */}
        <div className="w-1/2 z-10">
          <h1 className="text-white text-5xl font-bold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            We bring the store
            <br />
            to your{' '}
            <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
              door
            </span>
          </h1>

          <p className="text-white/70 mt-5 text-sm max-w-[1450px]">
            Get organic produce and sustainably sourced groceries delivered at
            up to 40% off grocery.
          </p>

          <button
            className="
              group/btn relative overflow-hidden
              mt-6 bg-yellow-500 text-black px-8 py-3 rounded-2xl font-semibold
              inline-flex items-center gap-2
              shadow-[0_8px_0_0_rgb(202,138,4)]
              hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_12px_0_0_rgb(202,138,4)]
              active:translate-y-1 active:shadow-[0_4px_0_0_rgb(202,138,4)]
              transition-all duration-200
            "
          >
            {/* Shine sweep on hover */}
            <span className="pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-white/50 blur-md opacity-0 group-hover/btn:opacity-100 group-hover/btn:[animation:shine_0.9s_ease]" />
            <span className="relative z-10">Shop Now</span>
            <span className="relative z-10 transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
          </button>
        </div>

        {/* Grocery Image */}
        <div className="absolute right-0 bottom-0 w-[55%] h-full flex items-end justify-center z-10">
          {/* Soft spotlight behind the produce */}
          <div className="pointer-events-none absolute bottom-10 h-[220px] w-[420px] rounded-full bg-emerald-300/12 blur-3xl" />
          {/* Ground shadow */}
          <div className="absolute bottom-6 h-6 w-[380px] rounded-full bg-black/30 blur-2xl" />
          <img
            src="/Grocery.png"
            alt="Fresh groceries"
            className="relative w-[540px] object-contain drop-shadow-2xl animate-[bob_5s_ease-in-out_infinite] transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
