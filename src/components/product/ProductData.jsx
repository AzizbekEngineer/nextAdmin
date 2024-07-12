"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./product.scss";
import Link from "next/link";
import { useGetProductsQuery } from "@/app/lib/api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "@/app/lib/features/wishlist/wishlistSlice";
import { add } from "@/app/lib/features/cart/cartSlice";
import ProductItem from "../productItem/ProductItem";
import { useGetCategoryQuery } from "@/app/lib/api/categoryAPi";

const ProductData = ({ limit, title, desc }) => {
  const [categoryValue, setCategoryValue] = useState("");
  const { data, isLoading } = useGetProductsQuery({
    limit,
    page: 1,
    category: categoryValue,
  });
  const { data: categories, isLoading: isLoadingCategory } =
    useGetCategoryQuery();
  // const wishlist = useSelector((state) => state.wishlist.value);
  // const cart = useSelector((state) => state.cart.value);
  console.log(categories);

  return (
    <div className="product">
      <div className="container">
        <h3 className="product__sec__title">{title}</h3>
        <p className="product__desc">{desc}</p>
        <ul className="product__categories">
          <li className="product__categories__item">
            <data onClick={() => setCategoryValue("")} value="">
              All
            </data>
          </li>
          {categories?.map((item) => (
            <li className="product__categories__item" key={item.id}>
              <data
                onClick={() => setCategoryValue(item.title)}
                value={item?.title}
              >
                {item?.title}
              </data>
            </li>
          ))}
        </ul>
        <div className="product__cards">
          {data?.map((el) => (
            <ProductItem el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
