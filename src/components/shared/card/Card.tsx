/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import { useRef } from 'react';

import classNames from 'classnames/bind';
import {
  useTransform, useScroll, motion, MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Spacing from '../spacing/Spacing';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

interface CardProps {
  i: number
  title: string
  description: string
  feature: string[]
  src: string
  link: string
  color: string
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

function Card({
  i, title, description, feature, src, link, color, progress, range, targetScale,
}: CardProps) {
  const route = useRouter();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={cx('cardContainer')}>
      <motion.div
        className={cx('card')}
        style={{ backgroundColor: color, scale, top: `calc( ${i * 25}px)` }}
      >
        <div className={cx('titleContainer')}>
          <h2 className={cx('title')}>{title}</h2>
          <ShareIcon onClick={() => { return route.push(link); }} />
        </div>
        <Spacing size={24} />
        <div className={cx('body')}>
          <div className={cx('description')}>
            <p className={cx('introduce')}>프로젝트 소개</p>
            <Spacing size={8} />
            <p className={cx('content')}>{description}</p>
            <Spacing size={16} />
            <p className={cx('feature')}>구현 기능</p>
            <Spacing size={8} />
            <ul>
              {feature.map((item) => {
                return (
                  <>
                    <Spacing size={8} />
                    <li key={item}>{item}</li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={src}
                alt="image"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;

function ShareIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg data-name="Layer 1" height="60" id="Layer_1" viewBox="0 0 200 200" width="60" xmlns="http://www.w3.org/2000/svg" onClick={onClick} style={{ cursor: 'pointer' }}>
      <title />
      <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM97.5,57.5a9.9,9.9,0,0,0-14,14L112,100,83.5,128.5a9.9,9.9,0,0,0,14,14L126,114a19.92,19.92,0,0,0,0-28.5Z" />
    </svg>
  );
}
