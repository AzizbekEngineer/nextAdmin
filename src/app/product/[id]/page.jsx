import Detail from "@/components/single/Detail";
import React from "react";

const ProductDetail = async ({ params }) => {
  let { id } = params;

  return (
    <div>
      <Detail id={id} />
    </div>
  );
};

export default ProductDetail;
