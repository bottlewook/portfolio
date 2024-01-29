import React, { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import { animate } from 'framer-motion';

import styles from './Counter.module.scss';

interface CounterProps {
  from: number
  to: number
  onNext: () => void
}

const cx = classNames.bind(styles);

function Counter({ from, to, onNext }: CounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current as HTMLParagraphElement;

    const controls = animate(from, to, {
      duration: 3,
      onUpdate(value) {
        node.textContent = `${value.toFixed(0)}%`;
        if (value === 100) {
          onNext();
        }
      },
    });

    return () => { return controls.stop(); };
  }, [from, to, onNext]);

  return <p ref={nodeRef} className={cx('counter')} />;
}

export default Counter;
