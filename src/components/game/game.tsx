import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { AppContext } from '../../pages/App';
import { useGame } from '../../hooks/useGame';

import Button from '../button/button';
import ButtonLink from '../button/buttonLink';

import styles from './game.module.scss';
import { AllWordsModel, SingleGameModel } from '../../api/Game/Game.model';

const Game = () => {
  const { t } = useTranslation();
  const { points, setPoints } = useContext(AppContext);

  const [randomNumber, setRandomNumber] = useState(0);
  const [allData, setAllData] = useState<SingleGameModel>();
  const [wordsList, setWordsList] = useState<AllWordsModel>([]);
  const [check, setCheck] = useState(false);

  const newWordList = [...wordsList];

  const { data: games } = useGame();

  useEffect(() => {
    setPoints(0);

    const min = 0;
    const max = games.length;
    const number = Math.floor(Math.random() * (max - min) + min);
    setRandomNumber(number);

    const fetchAllData = games[randomNumber];
    setAllData(fetchAllData);

    const data: AllWordsModel = [];
    allData?.all_words.forEach((elem) => {
      data.push({
        id: uuidv4(),
        value: elem,
        checked: false,
        isGood: false,
      });
    });
    setWordsList(data);
  }, [allData, games]);

  const toggleAddToChecked = (wordValue: string) => {
    const index = wordsList.findIndex((word) => word.value === wordValue);
    newWordList[index].checked = !newWordList[index].checked;
    if (allData?.good_words.includes(wordValue)) {
      newWordList[index].isGood = !newWordList[index].isGood;
    }
    setWordsList(newWordList);
  };

  const toggleCheck = () => {
    setCheck(true);

    const CheckedBadWords = wordsList.filter(
      (result) => result.checked && !allData?.good_words.includes(result.value),
    );
    const numberBadChecked = CheckedBadWords.length;

    const notCheckedGoodWords = wordsList.filter(
      (result) => !result.checked && allData?.good_words.includes(result.value),
    );
    const numberGoodNotChecked = notCheckedGoodWords.length;

    const CheckedGoodWords = wordsList.filter(
      (result) => result.checked && allData?.good_words.includes(result.value),
    );
    const numberGoodChecked = CheckedGoodWords.length;
    const addForGoodAnswer = numberGoodChecked * 2;

    setPoints(points - numberBadChecked - numberGoodNotChecked + addForGoodAnswer);
  };

  useEffect(() => {}, [wordsList]);

  return (
    <div className={styles.game}>
      <h2 className={styles.game__title}>{allData?.question}</h2>
      <div className={styles.game__box}>
        {wordsList.map((word) => (
          <div className={styles.game__boxContainer} key={word.id}>
            {check && word.checked && !word.isGood && (
              <p className={styles.game__boxContainerBad}>{t('game.bad')}</p>
            )}
            {check && word.checked && word.isGood && (
              <p className={styles.game__boxContainerGood}>{t('game.good')}</p>
            )}
            {!check && (
              <button
                type="button"
                className={word.checked ? styles.game__boxWordChecked : styles.game__boxWord}
                onClick={() => toggleAddToChecked(word.value)}
              >
                {word.value}
              </button>
            )}
            {check && !word.isGood && (
              <button
                type="button"
                className={word.checked ? styles.game__boxWordCheckedBad : styles.game__boxWord}
                onClick={() => toggleAddToChecked(word.value)}
              >
                {word.value}
              </button>
            )}
            {check && word.isGood && (
              <button
                type="button"
                className={word.checked ? styles.game__boxWordCheckedGood : styles.game__boxWord}
                onClick={() => toggleAddToChecked(word.value)}
              >
                {word.value}
              </button>
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
