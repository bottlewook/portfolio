import { ForwardedRef, forwardRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

import classNames from 'classnames/bind';

import Spacing from '@shared/spacing/Spacing';

import styles from './AboutMe3.module.scss';

const cx = classNames.bind(styles);

const AboutMe = forwardRef((
  _,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <section
      ref={ref}
      className={cx('container')}
    >
      <p className={cx('static')}>안녕하세요 저는,</p>
      <Spacing size={16} />
      <TypeAnimation
        className={cx('dynamic')}
        sequence={[
          '프론트엔드 개발자 임병욱입니다.',
          1000,
          '사용자 경험을 중요시하는 임병욱입니다.',
          1000,
          '새로운 기술을 익히는 것을 좋아하는 임병욱입니다.',
          1000,
        ]}
        wrapper="div"
        speed={10}
        deletionSpeed={10}
        repeat={Infinity}
      />
    </section>
  );
});

export default AboutMe;
