'use client';

import { useRef } from 'react';

import classNames from 'classnames/bind';
import { useInView, motion } from 'framer-motion';

import styles from './MaskText.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable react/no-array-index-key */
const phrases = [
  '최신 기술을 도입하기 전에 "왜 이 기술을 도입해야 하는가"에 집중하며',
  '최적화, 문제 해결 능력에 큰 관심을 가진 개발자 임병욱입니다.',
];

export function MaskText() {
  const body = useRef<HTMLDivElement>(null);
  const isInView = useInView(body, { once: true, margin: '75%' });

  const animation = {
    initial: { y: '100%' },
    enter: (i: number) => { return { y: '0', transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }; },
  };

  return (
    <div className={cx('container')} ref={body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={isInView ? 'enter' : ''}>{phrase}</motion.p>
          </div>
        );
      })}
    </div>
  );
}
