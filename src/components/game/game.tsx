import { useTranslation } from 'react-i18next';
import Button from '../button/button';
import styles from './game.module.scss';

const Game = () => {
  const { t } = useTranslation();

  const toggleCheck = () => {
    console.log('check');
  };

  return (
    <div className={styles.game}>
      <h2 className={styles.game__title}>{t('game.title')} #variable</h2>
      <div className={styles.game__box}>BOX</div>
      <Button onClick={toggleCheck}>{t('game.button')}</Button>
    </div>
  );
};

export default Game;
