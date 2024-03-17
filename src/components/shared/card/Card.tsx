/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import { useRef } from 'react';

import classNames from 'classnames/bind';
import {
  useTransform, motion, MotionValue,
} from 'framer-motion';

import Spacing from '@shared/spacing/Spacing';

import CardButton from '../card-button/CardButton';
import Carousel from '../carousel/Carousel';
import Github from '../icons/Github';
import Homepage from '../icons/Homepage';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

interface CardProps {
  i: number
  title: string
  description: string
  feature: string[]
  backgroundColor: string
  color: string
  progress: MotionValue<number>
  range: number[]
  targetScale: number
  images: string[]
  githubLink: string
  projectLink: string
}

function Card({
  i, title,
  description,
  feature,
  backgroundColor,
  color, progress, range, targetScale, images,
  githubLink, projectLink,
}: CardProps) {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className={cx('cardContainer')}>
      <motion.div
        className={cx('card')}
        style={{ backgroundColor, scale, top: `calc( ${i * 25}px)` }}
      >
        <h2 className={cx('header')}>{title}</h2>
        <Spacing size={8} />
        <div className={cx('body')}>
          <div className={cx('description')}>
            <p className={cx('content')}>{description}</p>
            <Spacing size={16} />
            <p className={cx('feature')}>담당 기능</p>
            <ul>
              {feature.map((item) => {
                return (
                  <>
                    <Spacing size={8} />
                    <li key={item} style={{ color, fontWeight: 500 }}>{item}</li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className={cx('imageContainer')}>
            <Carousel images={images} />
            <Spacing size={16} />
            <div className={cx('buttonGroup')}>
              <CardButton icon={<Github />} name="github link" link={githubLink} />
              <CardButton icon={<Homepage />} name="project link" link={projectLink} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
