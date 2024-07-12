import React from "react";

import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "@/app/lib/features/wishlist/wishlistSlice";
import {
  add,
  decreaseAmount,
  increaseAmount,
  remove,
} from "@/app/lib/features/cart/cartSlice";

import "../product/product.scss";

const ProductItem = ({ el }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  let existProductItem = cart.find((item) => item.id === el?.id);

  return (
    <div className="product__card" key={el.id}>
      <div className="product__img">
        <Image width={200} height={200} src={el?.images[0]} alt={el?.title} />

        <div className="product__slice">
          <div className="product__btns">
            <button onClick={() => dispatch(toggleHeart(el))}>
              {wishlist?.some((item) => item.id === el.id) ? (
                <FaHeart color="red" />
              ) : (
                <FaRegHeart color="red" />
              )}
            </button>
            <button onClick={() => dispatch(add(el))}>
              {cart?.some((item) => item.id === el.id) ? (
                <FaShoppingCart color=" #56B280" />
              ) : (
                <IoCartOutline />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <Link href={`/product/${el.id}`}>
          <h3 className="product__title">{el.title}</h3>
        </Link>
        <h4 className="product__price">{el.price}</h4>
        {existProductItem ? (
          <div className="detail__counter">
            <button
              onClick={() =>
                dispatch(
                  existProductItem?.amount > 1 ? decreaseAmount(el) : remove(el)
                )
              }
            >
              -
            </button>
            <span> {existProductItem?.amount}</span>
            <button onClick={() => dispatch(increaseAmount(el))}>+</button>
          </div>
        ) : (
          <button className="detail__btn" onClick={() => dispatch(add(el))}>
            <IoCartOutline /> <span>+ Add to cart</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
