import { useTranslation } from 'react-i18next';

import Me from '../../assets/me.jpg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as MakaDev } from '../../assets/logo_small.svg';

import styles from './about.module.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.about}>
      <div className={styles.about__greeting}>
        <img
          className={styles.about__greetingImage}
          src={Me}
          alt="Patryk Makarewicz"
          title="Frontend Developer | React"
        />
        <h2 className={styles.about__greetingTitle}> {t('about.greeting')}</h2>
      </div>
      <p className={styles.about__paragraph}>
        {t('about.paragraph_first')}{' '}
        <span className={styles.about__paragraphColor}>{t('about.paragraph_second')}</span>.
      </p>
      <p className={styles.about__paragraph}>
        {t('about.paragraph_third')}{' '}
        <span className={styles.about__paragraphColor}>{t('about.paragraph_fourth')}</span>{' '}
        {t('about.paragraph_fifth')}{' '}
        <span className={styles.about__paragraphColor}>{t('about.paragraph_sixth')}</span>
      </p>
      <p className={styles.about__paragraphSize}>
        {t('about.paragraph_seventh')} =&gt;
        <a
          className={styles.about__paragraphLink}
          href="https://github.com/patryk-makarewicz"
          target="_blank"
          rel="noreferrer"
          title="Link to Github"
        >
          <Github className={styles.about__paragraphIcon} />
        </a>
      </p>
      <p className={styles.about__paragraphSize}>
        {t('about.paragraph_eight')} =&gt;
        <a
          className={styles.about__paragraphLink}
          href="https://patryk-makarewicz.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Link to portfolio"
        >
          <MakaDev className={styles.about__paragraphIcon} />
        </a>
      </p>
    </div>
  );
};

export default About;
