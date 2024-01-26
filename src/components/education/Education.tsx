/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import { ForwardedRef, forwardRef, useRef } from 'react';

import classNames from 'classnames/bind';
import { motion, useScroll } from 'framer-motion';

import styles from './Education.module.scss';
import Word from './word/Word';

const cx = classNames.bind(styles);

const Education = forwardRef((
  { paragraph }: { paragraph: string },
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const words = paragraph.split('\n');
  return (
    <motion.section ref={ref} className={cx('educationSection')}>
      <p
        ref={container}
        className={cx('paragraph')}
      >
        {words.map((word: string, i: number) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
        })}
      </p>
    </motion.section>
  );
});

export default Education;
