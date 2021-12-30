import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './navigation.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="navigation">
        <li className="navigation__item">
          <NavLink
            className="navigation__item-link"
            activeClassName="navigation__item-link--active"
            exact
            to="/search"
          >
            {t('navigation.search')}
            <div className="navigation__item-underline" />
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            className="navigation__item-link"
            activeClassName="navigation__item-link--active"
            to="/about"
          >
            {t('navigation.about')}
            <div className="navigation__item-underline" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
