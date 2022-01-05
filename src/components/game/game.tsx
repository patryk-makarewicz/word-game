/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  const [wordsList, setWordsList] = useState<State[]>([]);
  const newWordList = [...wordsList];

  useEffect(() => {
    const min = 0;
    const max = gameData.length;
    const number = Math.floor(Math.random() * (max - min) + min);

    setRandomNumber(number);

    const fetchWords = gameData[randomNumber].all_words;
    const data: { value: string; checked: boolean }[] = [];
    fetchWords.forEach((elem) => {
      data.push({
        value: elem,
        checked: false,
      });
    });
    setWordsList(data);
  }, []);

  const toggleClick = (wordValue: any) => {
    const index = wordsList.findIndex((word) => word.value === wordValue);
    newWordList[index].checked = !newWordList[index].checked;
    setWordsList(newWordList);
  };

  const toggleCheck = () => {
    console.log('check');
  };

  return (
    <div className={styles.game}>
      <h2 className={styles.game__title}>{t('game.title')} #variable</h2>
      <div className={styles.game__box}>
        {wordsList.map((word: any, index) => (
          <p
            key={index}
            className={word.checked ? styles.game__boxWordChecked : styles.game__boxWord}
            onClick={() => toggleClick(word.value)}
          >
            {word.value}
          </p>
        ))}
      </div>
      <Button onClick={toggleCheck}>{t('game.button')}</Button>
    </div>
  );
};

export default Game;
