import { ForwardedRef, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './Intro.module.scss';

const cx = classNames.bind(styles);

const Intro = forwardRef((
  { moveAboutMe }: { moveAboutMe: () => void },
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <section ref={ref} className={cx('introSection')}>
      <video src="./backgroundVideo.mp4" autoPlay loop muted />
      <div className={cx('title')}>
        <p>안녕하세요!</p>
        <p className={cx('name')}>
          - 프론트엔드 개발자를 꿈 꾸는
          <span> 임병욱</span>
          입니다 -
        </p>
        <button onClick={moveAboutMe}>살펴보기</button>
      </div>
    </section>
  );
});

export default Intro;
