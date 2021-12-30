import { useTranslation } from 'react-i18next';
import ButtonLink from '../button/buttonLink';

import styles from './start.module.scss';

const Greeting = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.start}>
      <h2 className={styles.start__title}> {t('landing.title')}</h2>
      <input
        className={styles.start__input}
        type="text"
        placeholder={t('landing.placeholder')}
        autoComplete="off"
        maxLength={30}
      />
      <ButtonLink to="/game">{t('landing.button')}</ButtonLink>
    </div>
  );
};

export default Greeting;
