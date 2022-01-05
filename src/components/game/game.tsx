/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../../pages/App';
import Button from '../button/button';
import ButtonLink from '../button/buttonLink';
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
  const { points, setPoints } = useContext(AppContext);

  const [randomNumber, setRandomNumber] = useState(0);
  const [allData, setAllData] = useState<IAllData>();
  const [wordsList, setWordsList] = useState<IAllWords[]>([]);
  const newWordList = [...wordsList];
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setPoints(0);

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
      setPoints(points + 2);
    } else {
      setPoints(points - 1);
    }
    setWordsList(newWordList);
  };

  const toggleCheck = () => {
    setCheck(true);
    const notCheckedGoodWords = wordsList.filter(
      (result) => !result.checked && allData?.good_words.includes(result.value),
    );
    const numberGoodNotChecked = notCheckedGoodWords.length;
    setPoints(points - numberGoodNotChecked);
  };

  useEffect(() => {}, [wordsList]);

  return (
    <div className={styles.game}>
      <h2 className={styles.game__title}>{allData?.question}</h2>
      <div className={styles.game__box}>
        {wordsList.map((word: any, index) => (
          <div className={styles.game__boxContainer} key={index}>
            {check && word.checked && !word.isGood && (
              <p className={styles.game__boxContainerBad}>Bad</p>
            )}
            {check && word.checked && word.isGood && (
              <p className={styles.game__boxContainerGood}>Good</p>
            )}
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
      {!check ? (
        <Button onClick={toggleCheck}>{t('game.button')}</Button>
      ) : (
        <ButtonLink to="/result">{t('game.buttonFinish')}</ButtonLink>
      )}
    </div>
  );
};

export default Game;
