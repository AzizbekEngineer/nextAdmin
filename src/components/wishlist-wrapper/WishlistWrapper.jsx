"use client";
import { toggleHeart } from "@/app/lib/features/wishlist/wishlistSlice";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../product/product.scss";
import "./wishlist.scss";
import Link from "next/link";
import Empty from "../empty/Empty";

const WishlistWrapper = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  return (
    <div>
      {wishlist.length ? (
        <div className="product">
          <div className="product__cards wishlist">
            {wishlist.map((el) => (
              <div className="product__card" key={el.id}>
                <div className="product__img">
                  <Image
                    width={200}
                    height={200}
                    alt={el?.title}
                    src={el?.images[0]}
                  />

                  <div className="product__slice">
                    <div className="product__btns">
                      <button onClick={() => dispatch(toggleHeart(el))}>
                        {wishlist?.some((item) => item.id === el.id) ? (
                          <FaHeart color="red" />
                        ) : (
                          <FaRegHeart color="red" />
                        )}
                      </button>
                      <button>
                        <IoCartOutline />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product__info">
                  <Link href={`/product/${el.id}`}>
                    <h3 className="product__title">{el.title}</h3>
                  </Link>
                  <h4 className="product__price">{el.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Empty url="https://cdn-icons-png.flaticon.com/512/2037/2037366.png" />
      )}
    </div>
  );
};

export default WishlistWrapper;
