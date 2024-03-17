import React from 'react';

import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Curtain.module.scss';

const cx = classNames.bind(styles);

const curtainVariant = {
  enter: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const colorVariant = {
  start: { scaleY: 1 },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  end: {
    scaleY: 1,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

function Curtain() {
  return (
    <AnimatePresence>
      <motion.div
        initial="start"
        animate="enter"
        exit="end"
        variants={curtainVariant}
        className={cx('curtain')}
      >
        <motion.div variants={colorVariant} className={cx('item')} />
      </motion.div>
    </AnimatePresence>
  );
}

export default Curtain;
