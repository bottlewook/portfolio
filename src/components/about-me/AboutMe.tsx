/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import { ForwardedRef, forwardRef, useRef } from 'react';

import classNames from 'classnames/bind';
import { motion, useScroll } from 'framer-motion';

import Spacing from '@shared/spacing/Spacing';

import styles from './AboutMe.module.scss';
import Word from './word/Word';

const cx = classNames.bind(styles);

const aboutMeParagraph = `프론트엔드 생태계에 빠르게 적응하기 위해 공식 문서. 블로그, 인터넷 강의를 살펴보며 최신 기술을 탐구하기 위해 노력 중입니다.
최신 기술을 도입하기 전에 "왜 이 기술을 도입해야 하는가"에 집중하며, 컴포넌트 재사용성과 최적화, 문제 해결 능력에 큰 관심을 가지고 있습니다. 현재는 1일 1커밋과 알고리즘 스터디를 통해 내 생각을 말할 수 있는 힘을 기르고 효율적인 코드 작성할 수 있도록 노력 하고 있으 며, 코드를 작성할 때는 생각 없이 키보드에 손을 올리기보다는 머리로 먼저 생각하는 습관을 들이고 있습니다.
`;

const AboutMe = forwardRef((
  _,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.2'],
  });

  const words = aboutMeParagraph.split(' ');
  return (
    <motion.section ref={ref} className={cx('aboutMeSection')}>
      <div className={cx('container')}>
        <p className={cx('title')}>About Me!</p>
        <Spacing size={24} />
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
      </div>
    </motion.section>
  );
});

export default AboutMe;
