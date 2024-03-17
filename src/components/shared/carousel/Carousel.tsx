'use client';

import Image from 'next/image';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Carousel({ images }: { images: string[] }) {
  return (
    <Swiper
      spaceBetween={30}
      loop
      style={{ position: 'relative', width: '100%', height: '500px' }}
      pagination
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={3000}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image}>
            <Image
              src={image}
              alt={image}
              fill
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousel;
