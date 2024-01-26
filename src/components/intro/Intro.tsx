/* eslint-disable react/no-unescaped-entities */
import { ForwardedRef, forwardRef } from 'react';

import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Intro.module.scss';

const cx = classNames.bind(styles);

const Intro = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <motion.section ref={ref} className={cx('introSection')}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className={cx('container')}
      >
        <motion.p className={cx('title')}>
          제 소개를 하자면!
        </motion.p>
        <motion.p className={cx('title')}>
          - 프론트엔드 개발자를 꿈 꾸는 임병욱 -
        </motion.p>
        <motion.p>
          안녕하세요. 저는 요즘 최신 기술을 도입하기 전에 "왜 이 기술을 도입해야 하는가"에 집중하며,
        </motion.p>
        <motion.p>
          컴포넌트 재사용성과 최적화, 문제 해결 능력에 큰 관심을 가지고 있습니다.
        </motion.p>
        <motion.p>
          코드를 작성할 때는 생각 없이 키보드에 손을 올리기보다는 머리로 먼저 생각하는 습관을 들이고 있습니다.
        </motion.p>
      </motion.div>
    </motion.section>
  );
});

export default Intro;
