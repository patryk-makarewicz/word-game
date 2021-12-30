import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './navigation.module.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigation__item}>
          <NavLink
            className={styles.navigation__itemLink}
            activeClassName={styles.navigation__itemLinkActive}
            exact
            to="/"
          >
            {t('navigation.start')}
          </NavLink>
        </li>
        <li className={styles.navigation__item}>
          <NavLink
            className={styles.navigation__itemLink}
            activeClassName={styles.navigation__itemLinkActive}
            to="/about"
          >
            {t('navigation.about')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
