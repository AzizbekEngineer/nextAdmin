"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminLayout = () => {
  let path = usePathname();
  return (
    <div className="admin__sidebar">
      <h2 className="admin__dashboard">LayoutAdmin</h2>
      <div className="admin__list">
        <li
          className={`admin__item ${
            path === "/admin/createProduct" ? "admin__active" : ""
          }`}
        >
          <Link href={"/admin/createProduct"}>Create Product</Link>
        </li>
        <li
          className={`admin__item ${
            path === "/admin/manageProduct" ? "admin__active" : ""
          }`}
        >
          <Link href={"/admin/manageProduct"}>Manage Product</Link>
        </li>
        <li
          className={`admin__item ${
            path === "/admin/createCategory" ? "admin__active" : ""
          }`}
        >
          <Link href={"/admin/createCategory"}>Create Category</Link>
        </li>
        <li
          className={`admin__item ${
            path === "/admin/manageCategory" ? "admin__active" : ""
          }`}
        >
          <Link href={"/admin/manageCategory"}> Manage Category</Link>
        </li>
        <li className={`admin__item ${path === "/" ? "admin__active" : ""}`}>
          <Link href={"/"}>Home</Link>
        </li>
      </div>
    </div>
  );
};

export default AdminLayout;
