"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import Review1 from "@/assets/review1.jpg";
import Review2 from "@/assets/review2.jpg";
import Review3 from "@/assets/review3.jpg";
import Review4 from "@/assets/review4.jpg";
import Review5 from "@/assets/review5.jpg";
import Image from "next/image";

const TestimonialCard = () => {
  const data = [
    {
      imgSrc: Review1,
      name: "Sarah Thompson",
      role: "Client",
      review:
        "Working with Kashaf was a game-changer for our business. He built a lightning-fast, beautifully responsive website that our customers love.",
    },
    {
      imgSrc: Review2,
      name: "Jason Lee",
      role: "Client",
      review:
        "He turned our outdated site into a modern, mobile-friendly experience that boosted our user engagement by 40% in the first month alone. ",
    },
    {
      imgSrc: Review3,
      name: "Emma Robinson",
      role: "Client",
      review:
        "From UI/UX design to full-stack development, kashaf handled everything with professionalism and speed. she is recommended 100%",
    },
    {
      imgSrc: Review4,
      name: "Tom Harris",
      role: "Client",
      review:
        "I hired him for a freelance dashboard project and was blown away by the results. Not only was the code clean and scalable,",
    },
    {
      imgSrc: Review5,
      name: "Lisa Green",
      role: "Client",
      review:
        "Professional, efficient, and incredibly skilled. Our e-commerce platform now runs faster, looks better, and converts more visitors into customers—thanks to his MERN stack expertise.",
    },
  ];

  return (
    <Swiper
      slidesPerView={2}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
    >
      {data &&
        data.map((review, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="mt-10 cursor-pointer md:h-[260px] h-[240px] sm:h-[220px]">
                <div className="flex items-center">
                  <div className="h-[80px] w-[80px] flex items-center justify-center">
                    <Image
                      src={review.imgSrc}
                      alt={review.name}
                      className="rounded-full w-[60px] h-[60px]"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold text-xl">{review.name}</h1>
                    <p className="text-secondary">{review.role}</p>
                  </div>
                </div>
                <p className="text-secondary">{review.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default TestimonialCard;
