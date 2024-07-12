"use client";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/app/lib/api/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import "../product/product.scss";
import "./manageProduct.scss";

const ManageProduct = () => {
  const { data, isLoading } = useGetProductsQuery();
  const [productDelete] = useDeleteProductMutation();
  console.log(data);
  const handleDelete = (id) => {
    if (window.confirm("ochirmoqchimisan")) {
      productDelete(id);
    }
  };

  let manageItem = data?.map((el) => (
    <div className="product__card" key={el.id}>
      <div className="product__img">
        <Image width={200} height={200} src={el?.images[0]} alt={el?.title} />
      </div>
      <div className="product__info">
        <Link href={`/product/${el.id}`}>
          <h3 className="product__title">{el.title}</h3>
        </Link>
        <h4 className="product__price">{el.price}</h4>
        <p className="manageProduct__desc">{el.desc}</p>
        <div className="product__manage__btns">
          <button
            className="manageProduct__delete"
            onClick={() => handleDelete(el.id)}
          >
            <RiDeleteBinLine />
          </button>
          <button className="manageProduct__edit">
            <FaEdit />
          </button>
        </div>
      </div>
    </div>
  ));
  return <div className="manageProduct">{manageItem}</div>;
};

export default ManageProduct;
