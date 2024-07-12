"use client";

import { defaultCart } from "@/app/lib/features/cart/cartSlice";
import { defaultWishlist } from "@/app/lib/features/wishlist/wishlistSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultCart(JSON.parse(localStorage.getItem("cart")) || []));
    dispatch(
      defaultWishlist(JSON.parse(localStorage.getItem("wishlist")) || [])
    );
  }, []);
  return null;
};

export default DefaultValues;
