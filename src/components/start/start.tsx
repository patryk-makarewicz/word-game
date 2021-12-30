import { useTranslation } from 'react-i18next';
import ButtonLink from '../button/buttonLink';

import styles from './start.module.scss';

const Greeting = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.start}>
      <h2 className={styles.start__title}> {t('landing.title')}</h2>
      <p className={styles.start__paragraph}>{t('landing.paragraph')}</p>
      <ButtonLink to="/search">{t('landing.button')}</ButtonLink>
    </div>
  );
};

export default Greeting;
