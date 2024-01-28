/* eslint-disable react/no-array-index-key */
import { useRef } from 'react';

import classNames from 'classnames/bind';
import { useInView, motion } from 'framer-motion';

import styles from './MaskTextTitle.module.scss';

const cx = classNames.bind(styles);

function MaskTextTitle({ phrase }: { phrase: string }) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: '-20%' });
  const animation = {
    initial: { y: '100%' },
    enter: (i: number) => { return { y: '0', transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }; },
  };

  return (
    <div ref={body} className={cx('body')}>
      <div className={cx('lineMask')}>
        <motion.p variants={animation} initial="initial" animate={isInView ? 'enter' : ''}>{phrase}</motion.p>
      </div>
    </div>
  );
}

export default MaskTextTitle;
