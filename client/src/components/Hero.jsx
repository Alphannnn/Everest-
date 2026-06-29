function Hero() {
  return (
    <section className="mt-6">
      <div
        className="
          max-w-[1350px]
          mx-auto
          mt-5
          h-[350px]
          bg-green-900
          relative
          rounded-3xl
          overflow-hidden
          flex
          items-center
          justify-between
          px-12
        "
        style={{
          clipPath:
            'polygon(0 0,100% 0,100% 88%,92% 92%,80% 94%,65% 96%,50% 98%,35% 96%,20% 94%,8% 92%,0 88%)',
        }}
      >
        {/* Left Content */}
        <div className="w-1/2 z-10">
          <h1 className="text-white text-5xl font-bold leading-tight">
            We bring the store
            <br />
            to your door
          </h1>

          <p className="text-white/70 mt-5 text-sm max-w-[1450px]">
            Get organic produce and sustainably sourced groceries delivered at
            up to 40% off grocery.
          </p>

          <button className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Shop now
          </button>
        </div>

        {/* Grocery Image */}
        <div className="absolute right-0 bottom-0 w-[55%] h-full flex items-end justify-center">
          <img src="/grocery.png" className="w-[540px] object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
