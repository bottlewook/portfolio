'use client';

import 'swiper/scss';
import 'swiper/scss/pagination';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

function Carousel({ images }: { images: string[] }) {
  return (
    <Swiper
      spaceBetween={30}
      loop
      pagination
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={3000}
      className={cx('carouselContainer')}
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
