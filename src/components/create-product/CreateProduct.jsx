"use client";
import React, { useState } from "react";
import "./createProduct.scss";
import { useGetCategoryQuery } from "@/app/lib/api/categoryAPi";
import { useCreateProductMutation } from "@/app/lib/api/productApi";

let initialState = {
  title: "",
  price: "",
  desc: "",
  category: "",
  images: [
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  ],
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);
  const [createProduct, { data: productData }] = useCreateProductMutation();
  const { data, isLoading } = useGetCategoryQuery();

  const handleChange = (e) => {
    let { value, name } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createProduct(newProduct);
    setNewProduct(initialState);
  };

  console.log(newProduct);

  return (
    <div className="form">
      <h2 className="form__title">CreateProduct</h2>
      <form className="form__info" onSubmit={handleCreate} action="">
        <input
          type="text"
          name="title"
          value={newProduct.title}
          placeholder="Enter product name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Enter product price"
        />
        <input
          type="text"
          name="images"
          disabled
          // value={newProduct.images}
          // onChange={handleChange}
          placeholder="Enter product Image Url"
        />
        <select
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          id=""
        >
          {data?.map((el) => (
            <option value={el.title}>{el.title}</option>
          ))}
        </select>
        <textarea
          onChange={handleChange}
          name="desc"
          value={newProduct.desc}
          id=""
          placeholder="Enter product description"
        ></textarea>
        <button className="form__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
