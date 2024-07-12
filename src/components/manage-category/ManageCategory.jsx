"use client";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "@/app/lib/api/categoryAPi";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import "./manageCategory.scss";

const ManageCategory = () => {
  const { data, isLoading } = useGetCategoryQuery();
  const [categoryDelete] = useDeleteCategoryMutation();
  console.log(data);
  const handleDelete = (id) => {
    if (window.confirm("ochirmoqchimisan")) {
      categoryDelete(id);
    }
  };
  return (
    <div className="manage__category">
      <h2 className="manage__category__title">Manage Category</h2>
      <div className="manage__category__cards">
        {data?.map((el) => (
          <div key={el.id} className="manage__category__card">
            <h3>{el.title}</h3>
            <div className="manage__category__btns">
              <button
                className="manage__category__delete"
                onClick={() => handleDelete(el.id)}
              >
                <RiDeleteBinLine />
              </button>
              <button className="manage__category__edit">
                <FaEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCategory;
