import React from "react";
import "./empty.scss";

const Empty = ({ url, title }) => {
  return (
    <div className="container">
      <h3 className="empty__title">{title}</h3>
      <div className="empty__img">
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Empty;
