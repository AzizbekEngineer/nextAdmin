"use client";
import React, { memo, useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import {
  decreaseAmount,
  increaseAmount,
  remove,
  removeAll,
} from "../../app/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import Image from "next/image";
import Empty from "../empty/Empty";

const Cart = () => {
  const [modal, setModal] = useState(false);
  const [sum, setSum] = useState(0);
  const [promo, setPromo] = useState("");
  const [voucher, setVoucher] = useState(0);
  const cartData = useSelector((state) => state.cart.value);
  useEffect(() => {
    scroll(0, 0);
    const total = cartData.reduce((acc, el) => acc + el.price * el.amount, 0);
    setSum(Math.ceil(total));
  }, [cartData]);

  console.log(cartData);

  const handleAmount = (e) => {
    e.preventDefault();
    if (promo === "Laylo") {
      setVoucher(Math.ceil((sum + sum * 0.02) * 0.2));
    } else {
      alert("error");
    }
    setPromo("");
  };

  const dispatch = useDispatch();

  let cartItem = cartData?.map((el) => (
    <tr key={el?.id}>
      <td className="cart__product">
        <button
          onClick={() => dispatch(remove(el))}
          className="cart__remove__btn"
        >
          <IoCloseCircle />
        </button>
        <div className="cart__img">
          <Image width={100} height={100} alt="img" src={el?.images[0]} />
        </div>
        <p title={el?.title} className="cart__title">
          {el?.title}
        </p>
      </td>
      <td>
        <div className="cart__list">
          <p className="cart__item">PRICE</p>
          <p className="cart__price">${el?.price}</p>
        </div>
      </td>
      <td>
        <div className="cart__list">
          <p className="cart__item">QTY</p>
          <div className="cart__count">
            <button
              disabled={el?.amount <= 1}
              onClick={() => dispatch(decreaseAmount(el))}
            >
              -
            </button>
            <span> {el?.amount}</span>
            <button onClick={() => dispatch(increaseAmount(el))}>+</button>
          </div>
        </div>
      </td>
      <td>
        <div className="cart__list">
          <p className="cart__item">UNIT PRICE</p>
          <p className="unit__price">${Math.ceil(el?.price * el?.amount)}</p>
        </div>
      </td>
    </tr>
  ));

  console.log(cartData);
  return (
    <>
      {cartData.length ? (
        <div className="cart">
          <div className="container">
            <table className="cart__table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                </tr>
              </thead>
              <tbody>{cartItem}</tbody>
            </table>
            <div className="cart__bottom">
              <div className="cart__remove__all">
                <button onClick={() => dispatch(removeAll())}>
                  Remove All
                </button>
              </div>
              <div className="cart__bottom__price">
                <div className="cart__bottom__left">
                  <h2>Sub-total :{sum}$</h2>
                  <p>Tax and shipping cost will be calculated later</p>
                </div>
                <div className="cart__bottom__right">
                  <button>Check-out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Empty url="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp" />
      )}
      ;
    </>
  );
};

export default memo(Cart);
