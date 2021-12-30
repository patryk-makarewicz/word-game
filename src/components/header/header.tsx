import { NavLink } from 'react-router-dom';

import Navigation from './_partials/navigation';
import Language from '../language/language';

import Logo from '../../assets/logo.svg';
import './header.scss';

type ListProps = {
  languagePl: boolean;
  changeLanguage: (val: string) => void;
};

const Header = ({ languagePl, changeLanguage }: ListProps) => (
  <header className="wrapper">
    <div className="header">
      <div className="header__navigation">
        <NavLink to="/">
          <img className="header__navigation-logo" src={Logo} alt="Logo" />
        </NavLink>
        <Navigation />
      </div>
      <Language languagePl={languagePl} changeLanguage={changeLanguage} />
    </div>
  </header>
);

export default Header;
