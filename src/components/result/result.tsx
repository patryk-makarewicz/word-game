import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../../pages/App';
import ButtonLink from '../button/buttonLink';

import styles from './result.module.scss';

const Result = () => {
  const { t } = useTranslation();
  const { nickname } = useContext(AppContext);

  return (
    <div className={styles.result}>
      <h2 className={styles.result__congrats}>
        {t('result.congrats')}, {nickname}!
      </h2>
      <p className={styles.result__score}>{t('result.score')}:</p>
      <p className={styles.result__scoreBlue}>{t('result.points')}</p>
      <ButtonLink to="/">{t('result.button')}</ButtonLink>
    </div>
  );
};

export default Result;
