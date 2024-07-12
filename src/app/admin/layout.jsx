import Link from "next/link";
import React from "react";
import "./admin.scss";
import AdminLayout from "@/components/admin-layout/Admin-layout";

const Layout = ({ children }) => {
  return (
    <div className="admin">
      <AdminLayout />
      <div className="admin__context">{children}</div>
    </div>
  );
};

export default Layout;
