/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button/button';
import { gameData } from '../../helpers/game';
import styles from './game.module.scss';

type IAllData = {
  question: string;
  all_words: string[];
  good_words: string[];
};

type IAllWords = {
  value: string;
  checked: boolean;
  isGood: boolean;
};

const Game = () => {
  const { t } = useTranslation();

  const [randomNumber, setRandomNumber] = useState(0);
  const [allData, setAllData] = useState<IAllData>();
  const [wordsList, setWordsList] = useState<IAllWords[]>([]);
  const newWordList = [...wordsList];
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const min = 0;
    const max = gameData.length;
    const number = Math.floor(Math.random() * (max - min) + min);

    setRandomNumber(number);

    const fetchAllData = gameData[randomNumber];
    setAllData(fetchAllData);

    const data: IAllWords[] = [];
    allData?.all_words.forEach((elem) => {
      data.push({
        value: elem,
        checked: false,
        isGood: false,
      });
    });
    setWordsList(data);
  }, [allData]);

  const toggleClick = (wordValue: any) => {
    const index = wordsList.findIndex((word) => word.value === wordValue);
    newWordList[index].checked = !newWordList[index].checked;
    if (allData?.good_words.includes(wordValue)) {
      newWordList[index].isGood = !newWordList[index].isGood;
    }
    setWordsList(newWordList);
  };

  const toggleCheck = () => {
    setCheck(true);
  };

  useEffect(() => {}, [wordsList]);
  console.log(wordsList);

  return (
    <div className={styles.game}>
      <h2 className={styles.game__title}>{allData?.question}</h2>
      <div className={styles.game__box}>
        {wordsList.map((word: any, index) => (
          <div key={index}>
            {!check && (
              <p
                className={word.checked ? styles.game__boxWordChecked : styles.game__boxWord}
                onClick={() => toggleClick(word.value)}
              >
                {word.value}
              </p>
            )}
            {check && !word.isGood && (
              <p
                className={word.checked ? styles.game__boxWordCheckedBad : styles.game__boxWord}
                onClick={() => toggleClick(word.value)}
              >
                {word.value}
              </p>
            )}
            {check && word.isGood && (
              <p
                className={word.checked ? styles.game__boxWordCheckedGood : styles.game__boxWord}
                onClick={() => toggleClick(word.value)}
              >
                {word.value}
              </p>
            )}
          </div>
        ))}
      </div>
      <Button onClick={toggleCheck}>{t('game.button')}</Button>
    </div>
  );
};

export default Game;
