/* eslint-disable react/no-array-index-key */
import classNames from 'classnames/bind';
import { MotionValue } from 'framer-motion';

import Char from '../char/Char';

import styles from './Word.module.scss';

const cx = classNames.bind(styles);

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: number[]
}

function Word({ children, progress, range }: WordProps) {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={cx('word')}>
      {children.split('').map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>;
      })}
    </span>

  );
}

export default Word;
