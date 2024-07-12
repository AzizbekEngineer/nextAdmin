import React from "react";
import "./loading.scss";

const Loading = () => {
  const lodingCard = (
    <div class="loading container">
      <div class="loading__item">
        <div class="loading__img bg__animation"></div>
        <div class="loading__title bg__animation"></div>
        <div class="loading__title bg__animation"></div>
      </div>
      <div class="loading__item">
        <div class="loading__title bg__animation"></div>
        <div class="loading__img bg__animation"></div>
        <div class="loading__title bg__animation"></div>
        <div class="loading__title bg__animation"></div>
      </div>
    </div>
  );
  return (
    <div className="container">
      <div className="loading__wrapper">{lodingCard}</div>
    </div>
  );
};

export default Loading;
