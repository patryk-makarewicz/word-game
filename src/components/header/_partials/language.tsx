import { useContext } from 'react';
import { AppContext } from '../../../pages/App';

import FlagPl from '../../../assets/flag_poland.svg';
import flagEn from '../../../assets/flag_en.svg';
import styles from './language.module.scss';

const Language = () => {
  const { languagePl, changeLanguage } = useContext(AppContext);

  return (
    <button
      className={styles.language}
      type="button"
      onClick={languagePl ? () => changeLanguage('en') : () => changeLanguage('pl')}
    >
      <img
        className={languagePl ? styles.language__flag : styles.language__flagDisabled}
        src={FlagPl}
        alt="Flaga wybranego języka"
      />
      <img
        className={!languagePl ? styles.language__flagEn : styles.language__flagDisabled}
        src={flagEn}
        alt="Flaga wybranego języka"
      />
      <p className={styles.language__paragraph}>{languagePl ? 'PL' : 'EN'}</p>
    </button>
  );
};

export default Language;
