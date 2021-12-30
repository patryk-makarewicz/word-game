import { NavLink } from 'react-router-dom';

import Navigation from './_partials/navigation';
import Language from './_partials/language';

import Logo from '../../assets/logo.svg';
import styles from './header.module.scss';

type ListProps = {
  languagePl: boolean;
  changeLanguage: (val: string) => void;
};

const Header = ({ languagePl, changeLanguage }: ListProps) => (
  <header className={styles.wrapper}>
    <div className={styles.innerWrapper}>
      <div className={styles.header}>
        <NavLink className={styles.header__link} to="/">
          <img className={styles.header__linkLogo} src={Logo} alt="Logo" />
        </NavLink>
        <Navigation />
      </div>
      <Language languagePl={languagePl} changeLanguage={changeLanguage} />
    </div>
  </header>
);

export default Header;
