"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import "./detail.scss";
import ProductData from "../product/ProductData";
import { useGetProductByIdQuery } from "@/app/lib/api/productApi";
import Loading from "@/app/product/[id]/loading";
import {
  add,
  decreaseAmount,
  increaseAmount,
  remove,
} from "@/app/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Detail = ({ id }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { data, isLoading } = useGetProductByIdQuery(id);
  let existProduct = cartData.find((el) => el.id === data?.id);
  return (
    <div className="detail">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="detail__container container">
          <div className="detail__left">
            <div className="detail__img">
              <Image
                width={100}
                height={100}
                alt={data?.title}
                src={data?.images[0]}
              />
            </div>
            <h3 className="detail__name">
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments.
            </h3>
            <h4 className="detail__ship">🚚 FREE SHIPPING</h4>
          </div>
          <div className="detail__right">
            <h3 className="detail__title">{data?.title}</h3>
            <div className="detail__infos">
              <div className="detail__infos__left">
                <h3 className="detail__price">{data?.price}</h3>
                <h3 className="detail__quantity">Quantity</h3>
                {existProduct ? (
                  <div className="detail__counter">
                    <button
                      onClick={() =>
                        dispatch(
                          existProduct?.amount > 1
                            ? decreaseAmount(data)
                            : remove(data)
                        )
                      }
                    >
                      -
                    </button>
                    <span> {existProduct?.amount}</span>
                    <button onClick={() => dispatch(increaseAmount(data))}>
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="detail__btn"
                    onClick={() => dispatch(add(data))}
                  >
                    <IoCartOutline /> <span>+ Add to cart</span>
                  </button>
                )}
              </div>
              <div className="detail__infos__right">
                <div className="detail__item">
                  <input type="radio" name="check" />
                  <span>One time purchase</span>
                </div>
                <div className="detail__item">
                  <input type="radio" name="check" />
                  <span>Subscribe and delivery every </span>
                  <select name="" id="">
                    <option value="4 weeks">4 weeks</option>
                    <option value="4 weeks">2 weeks</option>
                    <option value="4 weeks">3 weeks</option>
                  </select>
                </div>
                <p className="detail__desc">
                  Subscribe now and get the 10% of discount on every recurring
                  order. The discount will be applied at checkout.{" "}
                  <span>See details</span>
                </p>
                {/* <button
                  className="detail__btn"
                  onClick={() => dispatch(add(data))}
                >
                  <IoCartOutline /> <span>+ Add to cart</span>
                </button> */}
              </div>
            </div>
            <div className="detail__information">
              <span>Wax</span>: Top grade Soy wax that delivers a smoke less,
              consistent burn <br />
              <span>Fragrance</span>: Premium quality ingredients with natural
              essential oils <br />
              <span>Burning Time</span>: 70-75 hours <span>Dimension</span>:
              10cm x 5cm <span>Weight</span>: 400g <br />
            </div>
          </div>
        </div>
      )}
      <ProductData limit={8} />
    </div>
  );
};

export default Detail;
