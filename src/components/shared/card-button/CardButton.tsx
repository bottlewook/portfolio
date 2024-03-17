import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

import styles from './CardButton.module.scss';

const cx = classNames.bind(styles);

interface ICardButton {
  icon: React.ReactNode
  name: string
  link: string
}

function CardButton({ icon, name, link }: ICardButton) {
  const router = useRouter();
  return (
    <button className={cx('container')} onClick={() => { return router.push(link); }}>
      {icon}
      {name}
    </button>
  );
}

export default CardButton;
