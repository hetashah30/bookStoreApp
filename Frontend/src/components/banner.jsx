import React from "react";
// import bannerImage from "../../public/banner.png"; // Importing Banner image for easy access

function banner() {
  return (
    <>
      <div className="w-full container mx-auto mb-10 md:px-10 px-5 flex flex-col md:flex-row items-center justify-between">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          {/* Left side of the banner */}
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-400">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              We believe that books are more than just paper – they are gateways
              to new worlds, ideas, and inspiration. Explore our diverse
              collection featuring bestsellers, timeless classics, academic
              essentials, and hidden literary treasures. Whether you're a
              student, a casual reader, or a passionate bibliophile, BookStore
              offers a seamless and immersive experience to discover, learn, and
              grow.
            </p>

            {/* <label className="input validator w-full ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="black"
                >
                  <rect width="20" height="16" x="2" y="5" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                className="w-full text-black bg-white dark:text-black dark:bg-white placeholder-gray-500 outline-none ring-0 focus:ring-0 border border-gray-300 focus:border-black"
                type="email"
                placeholder="mail@site.com"
              />
            </label> */}
          </div>

          <button href="/course" className="btn mt-6 btn-secondary">
            <a
              href="/course"
              className="hover:text-yellow-100 transition-colors duration-300"
            >
              Browse books
            </a>
          </button>

          <div className="validator-hint hidden">Enter valid email address</div>
        </div>

        <div className="order-1 w-full md:w-1/2">
          {/* Right side of the banner */}
          <img
            src="/banner.png"
            alt="Books"
            className="w-full max-w-full h-auto mt-3 md:ml-35 md:mt-14 sm:mt-0 lg:mt-3"
          />
        </div>
      </div>
    </>
  );
}

export default banner;
