import { useTranslation } from 'react-i18next';
import ButtonLink from '../button/buttonLink';

import './greeting.scss';

const Greeting = () => {
  const { t } = useTranslation();

  return (
    <div className="greeting">
      <h2 className="greeting__title"> {t('greeting.title')}</h2>
      <p className="greeting__paragraph">{t('greeting.paragraph')}</p>
      <ButtonLink to="/search">{t('greeting.button')}</ButtonLink>
    </div>
  );
};

export default Greeting;
