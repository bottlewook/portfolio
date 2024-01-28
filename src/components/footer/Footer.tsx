import classNames from 'classnames/bind';

import Github from '../icons/Github';
import Spacing from '../shared/spacing/Spacing';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('container')}>
      <p>Copyright 2024. 임병욱. All rights reserved.</p>
      <Spacing size={16} />
      <Github />
    </footer>
  );
}

export default Footer;
