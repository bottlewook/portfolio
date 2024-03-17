import { RefObject } from 'react';

import classNames from 'classnames/bind';
import Link from 'next/link';

import styles from './MainNav.module.scss';

const cx = classNames.bind(styles);

interface MainNavProps {
  element: RefObject<HTMLDivElement>;
  onMoveToElement: () => void;
}

function MainNav({ sections }: { sections: MainNavProps[] }) {
  return (
    <header className={cx('header')}>
      <nav>
        BottleWook
        <ul>
          <li>
            <button onClick={sections[0].onMoveToElement}>
              About Me
            </button>
          </li>
          <li>
            <button onClick={sections[1].onMoveToElement}>
              Project
            </button>
          </li>
          <li>
            <button onClick={sections[2].onMoveToElement}>
              Skills
            </button>
          </li>
          <li>
            <button onClick={sections[3].onMoveToElement}>
              Education
            </button>
          </li>
        </ul>
        <Link href="mailto:bwlimtony@gmail.com" className={cx('contact')}>Contact</Link>
      </nav>
    </header>
  );
}

export default MainNav;
