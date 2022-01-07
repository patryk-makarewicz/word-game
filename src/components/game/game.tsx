import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
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
  id: string;
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
  const [check, setCheck] = useState(false);

  const newWordList = [...wordsList];

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
        id: uuidv4(),
        value: elem,
        checked: false,
        isGood: false,
      });
    });
    setWordsList(data);
  }, [allData]);

  const toggleAddToChecked = (wordValue: any) => {
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
              <p className={styles.game__boxContainerBad}>Bad</p>
            )}
            {check && word.checked && word.isGood && (
              <p className={styles.game__boxContainerGood}>Good</p>
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
