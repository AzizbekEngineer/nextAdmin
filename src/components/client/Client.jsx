import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import clientImg from "../../assets/client.png";
import "./client.scss";

const Client = () => {
  return (
    <div className="client">
      <div className="container">
        <div className="client__wrapper">
          <div className="client__infos">
            <h3 className="client__title">Clean and fragrant soy wax</h3>
            <h3 className="client__info">
              Made for your home and for your wellness
            </h3>
            <div className="client__items">
              <div className="client__item">
                <FaRegCheckCircle />
                <p className="client__desc">
                  <span>Eco-sustainable</span> : All recyclable materials, 0%
                  CO2 emissions
                </p>
              </div>
              <div className="client__item">
                <FaRegCheckCircle />
                <p className="client__desc">
                  <span>Hyphoallergenic</span> : 100% natural, human friendly
                  ingredients
                </p>
              </div>
              <div className="client__item">
                <FaRegCheckCircle />
                <p className="client__desc">
                  <span>Handmade</span> : All candles are craftly made with
                  love.
                </p>
              </div>
              <div className="client__item">
                <FaRegCheckCircle />
                <p className="client__desc">
                  <span>Long burning</span> : No more waste. Created for last
                  long.
                </p>
              </div>
            </div>
            <button className="client__btn">Learn more</button>
          </div>
          <div className="client__img">
            <Image src={clientImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
