"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import { FaStar } from "react-icons/fa";

import "./user.scss";
import Image from "next/image";

const User = () => {
  return (
    <div className="user">
      <div className="container">
        <h3 className="user__sec__title">Testimonials</h3>
        <p className="user__info">Some quotes from our happy customers</p>
        <div className="user__swiper">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              490: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              620: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user2} alt="User 2" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">
                  “I love it! No more air fresheners”
                </h3>
                <p className="user__name">Luisa</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user1} alt="User 1" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">“Recommended for everyone”</h3>
                <p className="user__name">Edoardo</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user3} alt="User 3" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">
                  “Looks very natural, the smell is awesome”
                </h3>
                <p className="user__name">Mart</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user2} alt="User 2" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">
                  “I love it! No more air fresheners”
                </h3>
                <p className="user__name">Luisa</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user1} alt="User 1" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">“Recommended for everyone”</h3>
                <p className="user__name">Edoardo</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user3} alt="User 3" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">
                  “Looks very natural, the smell is awesome”
                </h3>
                <p className="user__name">Mart</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user2} alt="User 2" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">
                  “I love it! No more air fresheners”
                </h3>
                <p className="user__name">Luisa</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user1} alt="User 1" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">“Recommended for everyone”</h3>
                <p className="user__name">Edoardo</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="user__card">
                <div className="user__img">
                  <Image width={300} height={200} src={user3} alt="User 3" />
                </div>
                <div className="user__stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3 className="user__title">
                  “Looks very natural, the smell is awesome”
                </h3>
                <p className="user__name">Mart</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default User;
