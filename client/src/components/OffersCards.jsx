const offers = [
  {
    id: 1,
    title: "Save",
    offer: "$29",
    description: "Enjoy Discount all types of Grocery & frozen item",
      topBg: "#fdc7db",
    bottomBg: "#5D2A8C",

    titleColor: "#7B1E5B",   // Pink bg ke matching
    offerColor: "#7B1E5B",
    image: "/offers/wheat.png",

    imageWidth: "w-[280px]",
      icon: "flower",
    
  },

  {
    id: 2,
    title: "Discount",
    offer: "30%",
    description: "Enjoy Discount all types of Grocery & frozen item",
    topBg: "#fddfc7",
    bottomBg: "#D97A34",
     titleColor: "#A44A00",   // Orange bg ke matching
    offerColor: "#A44A00",
    image: "/offers/peanut.png",

    imageWidth: "w-[280px]",
     icon: "rays",
  
  },

  {
    id: 3,
    title: "Up to",
    offer: "50%",
    description: "Enjoy Discount all types of Grocery & frozen item",
    topBg: "#c8efff",
    bottomBg: "#2D76C7",

    titleColor: "#1E5AA8",   // Blue bg ke matching
    offerColor: "#1E5AA8",
    image: "/offers/skippy.png",

    imageWidth: "w-[280px]",
    icon: "badge",
  },

  {
    id: 4,
    title: "Free",
    offer: "SHIP",
    description: "Enjoy Discount all types of Grocery & frozen item",
    topBg: "#f2c8fd",
    bottomBg: "#8A39B8",

    titleColor: "#8A2CA5",   // Purple bg ke matching
    offerColor: "#8A2CA5",
    image: "/offers/corn.png",

    imageWidth: "w-[280px]",
    icon: "spark",
  },
];

const OfferCards = () => {
  return (
    <section className="max-w-[1450px] mx-auto px-4 lg:px-6 py-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {offers.map((offer) => (

          <div
            key={offer.id}
            className="
              relative
              rounded-[32px]
              overflow-hidden
              bg-white
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
                        {/* =========================
                TOP SECTION
            ========================== */}

            <div
              className="relative h-[220px] px-7 pt-7"
              style={{ backgroundColor: offer.topBg }}
            >

              {/* Top Right Icon */}

             <div
  className="
    absolute
    top-6
    right-6
    flex
    items-center
    justify-center
    text-gray-600
    z-30
  "
>
  {offer.icon === "flower" && (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3"/>
      <circle cx="12" cy="4" r="2"/>
      <circle cx="12" cy="20" r="2"/>
      <circle cx="4" cy="12" r="2"/>
      <circle cx="20" cy="12" r="2"/>
      <circle cx="6.5" cy="6.5" r="2"/>
      <circle cx="17.5" cy="6.5" r="2"/>
      <circle cx="6.5" cy="17.5" r="2"/>
      <circle cx="17.5" cy="17.5" r="2"/>
    </svg>
  )}

  {offer.icon === "rays" && (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
      <path d="M12 3V7"/>
      <path d="M17 5L15.5 8"/>
      <path d="M21 10L17.5 11"/>
      <path d="M20 16L16.5 14"/>
      <path d="M15 20L13.5 16"/>
      <path d="M9 20L10.5 16"/>
      <path d="M4 16L7.5 14"/>
      <path d="M3 10L6.5 11"/>
    </svg>
  )}

  {offer.icon === "badge" && (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4"/>
      <path d="M9 12L7 20L12 17L17 20L15 12"/>
      <circle cx="12" cy="8" r="1"/>
    </svg>
  )}

  {offer.icon === "spark" && (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8">
      <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"/>
      <circle cx="19" cy="5" r="1"/>
      <circle cx="5" cy="19" r="1"/>
    </svg>
  )}
</div>

              {/* Text */}

                           <h4
  style={{ color: offer.titleColor }}
  className="text-[23px] font-semibold"
>
  {offer.title}
</h4>

                        <h1
  style={{ color: offer.offerColor }}
  className="text-[62px] font-extrabold leading-none mt-2"
>
  {offer.offer}
</h1>

              <p
                className="
                  mt-5
                  text-[15px]
                  leading-6
                  text-gray-700
                  max-w-[180px]
                "
              >
                {offer.description}
              </p>

            </div>

            {/* =========================
                 CURVE START
            ========================= */}

            <div className="relative">
                              {/* ==========================
                    PREMIUM CURVE
              =========================== */}

              <svg
                className="absolute -top-[1px] left-0 w-full h-[90px]"
                viewBox="0 0 400 100"
                preserveAspectRatio="none"
              >
                <path
                  d="
                  M0,55
                  C60,15
                  120,15
                  180,45
                  C220,65
                  280,65
                  320,40
                  C350,20
                  380,18
                  400,25
                  L400,100
                  L0,100
                  Z"
                  fill={offer.bottomBg}
                />
              </svg>

              {/* ==========================
                    DARK SECTION
              =========================== */}

              <div
                className="relative h-[280px]"
                style={{ backgroundColor: offer.bottomBg }}
              >

                {/* Decorative Circle */}

                <div
                  className="
                    absolute
                    -left-10
                    bottom-5
                    w-40
                    h-40
                    rounded-full
                    bg-white/10
                  "
                ></div>

                <div
                  className="
                    absolute
                    right-[-30px]
                    top-12
                    w-28
                    h-28
                    rounded-full
                    bg-white/10
                  "
                ></div>

                {/* Product Image */}

        <img
  src={offer.image}
  alt={offer.title}
  className={`
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    ${offer.imageWidth}
    object-contain
    z-20
    drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]
    transition-all
    duration-500
    hover:scale-110
  `}
/>

    
                                {/* Top Rounded Overlay */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-12
                    rounded-t-[38px]
                    overflow-hidden
                  "
                >
                  <svg
                    viewBox="0 0 400 80"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <path
                      d="
                      M0,40
                      C60,5
                      120,5
                      180,32
                      C220,52
                      280,52
                      340,20
                      C370,6
                      390,6
                      400,10
                      L400,80
                      L0,80
                      Z"
                      fill={offer.bottomBg}
                    />
                  </svg>
                </div>

                {/* Glow Behind Product */}

                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    top-10
                    w-44
                    h-44
                    rounded-full
                    bg-white/10
                    blur-2xl
                  "
                ></div>

                {/* Small Decorations */}

                <div
                  className="
                    absolute
                    left-8
                    bottom-7
                    w-5
                    h-5
                    rounded-full
                    bg-white/20
                  "
                ></div>

                <div
                  className="
                    absolute
                    right-10
                    bottom-12
                    w-3
                    h-3
                    rounded-full
                    bg-white/20
                  "
                ></div>

                <div
                  className="
                    absolute
                    right-14
                    top-20
                    w-4
                    h-4
                    rounded-full
                    bg-white/15
                  "
                ></div>

              </div>

            </div>

          </div>

        ))}

          
      </div>

    </section>

  );
};

export default OfferCards;
            
