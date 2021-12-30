import { useTranslation } from 'react-i18next';

import Me from '../../assets/me.jpg';
import ReactIcon from '../../assets/react.png';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as MakaDev } from '../../assets/logo_small.svg';

import './about.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__greeting">
        <img
          className="about__greeting-image"
          src={Me}
          alt="Patryk Makarewicz"
          title="Frontend Developer | React"
        />
        <h2 className="about__greeting-title"> {t('about.greeting')}</h2>
      </div>
      <p className="about__paragraph">
        {t('about.paragraph_first')}{' '}
        <span className="about__paragraph--color">{t('about.paragraph_second')}</span>.
      </p>
      <p className="about__paragraph">
        {t('about.paragraph_third')}{' '}
        <span className=" about__paragraph--color">{t('about.paragraph_fourth')}</span>{' '}
        {t('about.paragraph_fifth')}{' '}
        <span className="about__paragraph--color">{t('about.paragraph_sixth')}</span>
      </p>
      <p className="about__paragraph--size">
        {t('about.paragraph_seventh')} =&gt;
        <a
          className="about__paragraph-link"
          href="https://github.com/patryk-makarewicz"
          target="_blank"
          rel="noreferrer"
          title="Link to Github"
        >
          <Github className="about__paragraph-icon" />
        </a>{' '}
      </p>
      <p className="about__paragraph--size">
        {t('about.paragraph_eight')} =&gt;
        <a
          className="about__paragraph-link"
          href="https://patryk-makarewicz.github.io/"
          target="_blank"
          rel="noreferrer"
          title="Link to portfolio"
        >
          <img className="about__paragraph-icon" src={ReactIcon} alt="React icon" />
        </a>{' '}
      </p>
      <p className="about__paragraph--size">
        {t('about.paragraph_nine')} =&gt;
        <a
          className="about__paragraph-link"
          href="https://makadev.pl/"
          target="_blank"
          rel="noreferrer"
          title="Link to makaDev page"
        >
          <MakaDev className="about__paragraph-icon" />
        </a>
      </p>
    </div>
  );
};

export default About;
