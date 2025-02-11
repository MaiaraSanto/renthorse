"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { time } from "console";

const Carrousel = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const imagens = Array.from({ length: 4 }, (_, i) => `logo${i + 1}.jpeg`);
  const slideTransform = `translateX(-${currentItem * 100}%)`;
  const timerSelected = 2500;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isAutoPlay) {
      timer = setInterval(() => {
        setCurrentItem((prevSlide) => (prevSlide + 1) % imagens.length);
      }, timerSelected);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isAutoPlay]);

  return (
    <div
      className="carrousel relative w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div

        className="slides w-full xl:h-[760] h-[506px] flex transition-all duration-500 "
        style={{ width: "100%", transform: slideTransform }}
      >
        {imagens.map((image, index) => (
          <img
            key={index}
            src={`/assets/imagens/${image}`}
            alt={`Image ${index + 1}`}

            className={`slide object-cover  ${1 ? "w-full flex-shrink-0" : ""}`}      
          />
        ))}
      </div>
       {imagens.length > 0 && (
          <div className="bullets absolute w-full justify-center items-center bottom-10 z-30 flex flex-row gap-3">
            {Array.from({ length: imagens.length }).map((_, index) => (
              <div
                key={index}
                className={`cursor-pointer bullet w-2 h-2 rounded-full ${
                  currentItem === index ? "bg-charcoal" : "bg-cream"
                } `}
                onClick={() => setCurrentItem(index)}
              />
            ))}
          </div>
        )}
    </div>
  );
};

export default Carrousel;
