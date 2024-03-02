import React from "react";

const WishList = () => {
  return (
    <div>
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Profile</p>
      </div>

      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-3">
          <div className="px-4 py-3 shadow flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="../assets/images/avatar.png"
                alt="profile"
                className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">Hello,</p>
              <h4 className="text-gray-800 font-medium">John Doe</h4>
            </div>
          </div>

          <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            <div className="space-y-1 pl-8">
              <a href="#" className="block font-medium capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-address-card"></i>
                </span>
                Manage account
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Profile information
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Manage addresses
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                Change password
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-solid fa-box-archive"></i>
                </span>
                My order history
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My returns
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My Cancellations
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                My reviews
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-credit-card"></i>
                </span>
                Payment methods
              </a>
              <a
                href="#"
                className="relative hover:text-primary block capitalize transition"
              >
                voucher
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-regular fa-heart"></i>
                </span>
                My wishlist
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#"
                className="relative hover:text-primary block font-medium capitalize transition"
              >
                <span className="absolute -left-8 top-0 text-base">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </span>
                Logout
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-9 space-y-4">
          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <img
                src="../assets/images/products/product6.jpg"
                alt="product 6"
                className="w-full"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                Italian L shape
              </h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-green-600">In Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <a
              href="#"
              className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              add to cart
            </a>

            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>

          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <img
                src="../assets/images/products/product5.jpg"
                alt="product 6"
                className="w-full"
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                Dining Table
              </h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-green-600">In Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <a
              href="#"
              className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              add to cart
            </a>

            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>

          <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
            <div className="w-28">
              <img
                src="../assets/images/products/product10.jpg"
                alt="product 6"
                className="w-full "
              />
            </div>
            <div className="w-1/3">
              <h2 className="text-gray-800 text-xl font-medium uppercase">
                Sofa
              </h2>
              <p className="text-gray-500 text-sm">
                Availability: <span className="text-red-600">Out of Stock</span>
              </p>
            </div>
            <div className="text-primary text-lg font-semibold">$320.00</div>
            <a
              href="#"
              className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium"
            >
              add to cart
            </a>

            <div className="text-gray-600 cursor-pointer hover:text-primary">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
          <div className="col-span-1 space-y-8 mr-2">
            <img src="../assets/images/logo.svg" alt="logo" className="w-30" />
            <div className="mr-2">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                hic?
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Analitycs
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Analitycs
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Commerce
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Insights
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    API Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
          <div>
            <img
              src="../assets/images/methods.png"
              alt="methods"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
