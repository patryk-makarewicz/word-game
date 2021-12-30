import FlagPl from '../../assets/flag_poland.svg';
import flagEn from '../../assets/flag_en.svg';

import './language.scss';

type ListProps = {
  languagePl: boolean;
  changeLanguage: (val: string) => void;
};

const Language = ({ languagePl, changeLanguage }: ListProps) => (
  <button
    className="language"
    type="button"
    onClick={languagePl ? () => changeLanguage('en') : () => changeLanguage('pl')}
  >
    <img
      className={languagePl ? 'language__flag' : 'language__flagDisabled'}
      src={FlagPl}
      alt="Flaga wybranego języka"
    />
    <img
      className={!languagePl ? 'language__flagEn' : 'language__flagDisabled'}
      src={flagEn}
      alt="Flaga wybranego języka"
    />
    <p className="language__paragraph">{languagePl ? 'PL' : 'EN'}</p>
  </button>
);

export default Language;
