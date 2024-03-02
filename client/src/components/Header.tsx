"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { BsFillBagFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increment, decrement, flush } from "@/context/wishlist/wishlist-slice";
import { incrementCart, decrementCart } from "@/context/cart/cart-slice";

const Header = () => {
  const wishlist = useAppSelector((state) => state.wishlist.value);
  const cart = useAppSelector((state) => state.cart.value);
  const dispatch = useAppDispatch();

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <a href="/">
          <img src="assets/images/logo.svg" alt="Logo" className="w-32" />
        </a>

        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="w-full border border-primary border-r-0 pl-12 py-2 pr-3 rounded-l-md focus:outline-none focus:ring-none hidden md:flex"
            placeholder="search"
          />
          <button className="items-center bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-primary/80  transition hidden md:flex">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="/wishlist"
            className="flex flex-col items-center text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FaRegHeart size={21} />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            {wishlist > 0 && (
              <div className="absolute right-0 bg-red-500 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                {wishlist}
              </div>
            )}
          </a>
          <a
            onClick={() => dispatch(() => flush())}
            href="/shop"
            className="flex flex-col items-center text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <BsFillBagFill size={21} />
            </div>
            <div className="text-xs leading-3">Cart</div>
            {cart > 0 && (
              <div className="absolute -right-2 bg-red-500 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                {cart}
              </div>
            )}
          </a>
          <a
            href="/account"
            className="flex items-center justify-center flex-col text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <CgProfile size={21} />
            </div>
            <div className="text-xs leading-3">Account</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
