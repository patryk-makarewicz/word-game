import { NavLink } from 'react-router-dom';

import Navigation from './_partials/navigation';
import Language from './_partials/language';

import { ReactComponent as MakaDev } from '../../assets/logo_small.svg';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.innerWrapper}>
      <div className={styles.header}>
        <NavLink className={styles.header__link} to="/">
          <MakaDev className={styles.header__linkLogo} />
        </NavLink>
        <Navigation />
      </div>
      <Language />
    </div>
  </header>
);

export default Header;
