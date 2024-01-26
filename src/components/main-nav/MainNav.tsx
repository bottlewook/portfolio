import { RefObject } from 'react';

import classNames from 'classnames/bind';

import Text from '@shared/text/Text';

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
        <ul>
          <li>
            <button onClick={sections[0].onMoveToElement} style={{ paddingLeft: 0 }}>
              <Text typography="t1">About</Text>
            </button>
          </li>
          <li>
            <button onClick={sections[1].onMoveToElement}>
              <Text typography="t1">Education</Text>
            </button>
          </li>
          <li>
            <button onClick={sections[2].onMoveToElement}>
              <Text typography="t1">Project</Text>
            </button>
          </li>
          <li>
            <button onClick={sections[3].onMoveToElement}>
              <Text typography="t1">Contact</Text>
            </button>
          </li>
          <span />
        </ul>
        <Text typography="t1">BottleWook</Text>
      </nav>
    </header>
  );
}

export default MainNav;
