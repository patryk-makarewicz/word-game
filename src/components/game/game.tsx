/* eslint-disable react/no-array-index-key */
// import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button/button';
import { gameData } from '../../helpers/game';
import styles from './game.module.scss';

const Game = () => {
  const { t } = useTranslation();

  const min = 0;
  const max = gameData.length;
  const number = Math.floor(Math.random() * (max - min) + min);

  const toggleCheck = () => {
    console.log('check');
  };

  return (
    <div className={styles.game}>
      <h2 className={styles.game__title}>{t('game.title')} #variable</h2>
      <div className={styles.game__box}>
        {gameData[number].all_words.map((word: string, index) => (
          <p key={index} className={styles.game__boxWord}>
            {word}
          </p>
        ))}
      </div>
      <Button onClick={toggleCheck}>{t('game.button')}</Button>
    </div>
  );
};

export default Game;
