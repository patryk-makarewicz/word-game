import axios from 'axios';
import { useAPImocks } from '../config';
import { GameModel } from './Game.dto';
import { createRepoListMock } from './Game.mock';

const BASE_URL = 'https://api/game/patryk-makarewicz';

export const getGame = () =>
  useAPImocks ? createRepoListMock() : axios.get<GameModel>(`${BASE_URL}`).then(({ data }) => data);
