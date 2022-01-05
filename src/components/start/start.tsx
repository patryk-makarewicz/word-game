import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../../pages/App';
import ButtonLink from '../button/buttonLink';
import Button from '../button/button';

import styles from './start.module.scss';

const Start = () => {
  const { t } = useTranslation();
  const { nickname, setNickname } = useContext(AppContext);

  const [errorNickname, setErrorNickname] = useState(false);
  const toggleMinNicknameLength = () => {
    setErrorNickname(true);
  };

  return (
    <div className={styles.start}>
      <h2 className={styles.start__title}>{t('landing.title')}</h2>
      <div className={styles.start__box}>
        {errorNickname && <span className={styles.start__error}>{t('landing.error')}</span>}
        <input
          className={styles.start__input}
          type="text"
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          placeholder={t('landing.placeholder')}
          autoComplete="off"
          maxLength={21}
        />
      </div>
      {nickname.length > 2 ? (
        <ButtonLink to="/game">{t('landing.button')}</ButtonLink>
      ) : (
        <Button secondary onClick={toggleMinNicknameLength}>
          {t('landing.button')}
        </Button>
      )}
    </div>
  );
};

export default Start;
