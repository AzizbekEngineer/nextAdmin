"use client";
import { useCreateCategoryMutation } from "@/app/lib/api/categoryAPi";
import React, { useState } from "react";
import "./createCategory.scss";

let initialState = {
  title: "",
};

const CreateCategory = () => {
  const [newCategory, setNewCategory] = useState(initialState);
  const [createCategory, { data }] = useCreateCategoryMutation();
  const handleChange = (e) => {
    let { value, name } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createCategory(newCategory);
    console.log(newCategory);
    setNewCategory(initialState);
  };

  return (
    <div className="form">
      <h3 className="form__title">Create Category</h3>
      <form action="" onSubmit={handleCreate} className="form__wrapper">
        <input
          required
          type="text"
          value={newCategory.title}
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateCategory;
