/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button/button';
import { gameData } from '../../helpers/game';
import styles from './game.module.scss';

interface State {
  value?: any;
  checked?: boolean;
}

const Game = () => {
  const { t } = useTranslation();

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const min = 0;
    const max = gameData.length;
    const number = Math.floor(Math.random() * (max - min) + min);

    setRandomNumber(number);
  }, []);

  const [wordsList, setWordsList] = useState<State[]>([]);

  const toggleClick = (word: any) => {
    if (wordsList.includes(word)) {
      const index = wordsList.findIndex((el) => el === word);
      wordsList.splice(index, 1);
      setWordsList(wordsList);
    } else {
      setWordsList([...wordsList, word]);
    }
  };

  useEffect(() => {
    console.log(wordsList);
  }, [wordsList]);

  const toggleCheck = () => {
    console.log('check');
  };

  return (
    <div className={styles.game}>
      <h2 className={styles.game__title}>{t('game.title')} #variable</h2>
      <div className={styles.game__box}>
        {gameData[randomNumber].all_words.map((word: string, index) => (
          <p key={index} className={styles.game__boxWord} onClick={() => toggleClick(word)}>
            {word}
          </p>
        ))}
      </div>
      <Button onClick={toggleCheck}>{t('game.button')}</Button>
    </div>
  );
};

export default Game;
