import classNames from 'classnames/bind';

import styles from './ScrollDown.module.scss';

const cx = classNames.bind(styles);

function ScrollDown() {
  return (
    <div className={cx('box')}>
      <span />
      <span />
      <span />
    </div>
  );
}

export default ScrollDown;
