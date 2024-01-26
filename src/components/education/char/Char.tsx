import classNames from 'classnames/bind';
import { motion, useTransform, MotionValue } from 'framer-motion';

import styles from './Char.module.scss';

const cx = classNames.bind(styles);

interface CharProps {
  children: React.ReactNode
  progress: MotionValue<number>
  range: number[]
}
function Char({ children, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={cx('shadow')}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export default Char;
