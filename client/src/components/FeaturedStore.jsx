const stores = [
  {
    id: 1,
    name: "Crush grocery",
    delivery: "Delivery In 12 minute",
    color: "from-orange-500 to-orange-400",
    logo: "/logos/crush.png",
  },
  {
    id: 2,
    name: "Delivery market",
    delivery: "Delivery In 12 minute",
    color: "from-blue-700 to-indigo-500",
    logo: "/logos/market.png",
  },
  {
    id: 3,
    name: "Quality product",
    delivery: "Delivery In 12 minute",
    color: "from-emerald-400 to-green-300",
    logo: null,
  },
];

function FeaturedStore() {
  return (

    <section className="max-w-[1400px] mx-auto mt-16 px-4">

      {/* Heading */}

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-[36px] font-bold text-[#004D40]">

          Featured store

        </h2>

        <button
          className="
          text-[#C86B3C]
          font-semibold
          hover:opacity-70
          transition
          "
        >

          Visit all stores →

        </button>

      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {stores.map((store) => (

          <div

            key={store.id}

            className="
            bg-white
            rounded-[28px]
            overflow-hidden
            shadow-md
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            "

          >

            {/* Top Banner */}

            <div

              className={`
              relative
              h-[150px]
              bg-gradient-to-r
              ${store.color}
              overflow-hidden
              `}

            >

              {/* Curved Pattern */}

              <svg

                className="
                absolute
                inset-0
                w-full
                h-full
                opacity-20
                "

                viewBox="0 0 400 120"

                preserveAspectRatio="none"

              >

                <path

                  d="M0 20 C80 70 160 -20 240 40 S400 100 450 20"

                  stroke="white"

                  strokeWidth="2"

                  fill="none"

                />

                <path

                  d="M0 60 C80 110 160 20 240 80 S400 140 450 60"

                  stroke="white"

                  strokeWidth="2"

                  fill="none"

                />

                <path

                  d="M0 100 C80 150 160 60 240 120 S400 180 450 100"

                  stroke="white"

                  strokeWidth="2"

                  fill="none"

                />

              </svg>
                            {/* Logo */}

        <div
           className="
            absolute
            top-[52px]
            left-7
            w-20
           h-20
           rounded-full
            bg-white
            border-[5px]
            border-white
           shadow-xl
            flex
          items-center
           justify-center
           overflow-hidden
              z-20
                       "
                    >

                {
                  store.logo ?

                  <img
                   src={store.logo}
                   alt={store.name}
                   className="
                   w-16
                   h-16
                   rounded-full
                 object-cover
                               "
                                />

                  :

                  <div
                    className="
                    w-14
                    h-14
                    rounded-full
                    bg-gradient-to-r
                    from-emerald-400
                    to-green-300
                    flex
                    items-center
                    justify-center
                    text-white
                    text-3xl
                    font-bold
                    "
                  >

                    Q

                  </div>

                }

              </div>

            </div>

            {/* Bottom */}

            <div className="pt-8 px-7 pb-7">

              <h3
                className="
                text-[30px]
                font-bold
                text-[#1E293B]
                "
              >

                {store.name}

              </h3>

              <div className="flex items-center gap-3 mt-4">

                <div
                  className="
                  w-9
                  h-9
                  rounded-full
                  bg-yellow-100
                  flex
                  items-center
                  justify-center
                  "
                >

                  ⚡

                </div>

                <p
                  className="
                  text-gray-500
                  text-lg
                  "
                >

                  {store.delivery}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default FeaturedStore;