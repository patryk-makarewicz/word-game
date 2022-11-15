/* eslint-disable no-console */
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { QueryKey, Game } from '../api';
import { GameModel } from '../api/Game/Game.dto';

export const useGame = () => {
  const { t } = useTranslation();
  const [initialLoading, setInitialLoading] = useState(true);

  const { data, isLoading, isError } = useQuery<GameModel>([QueryKey.loadGame], Game.getGame, {
    refetchOnWindowFocus: false,
    onSettled: () => {
      setInitialLoading(false);
    },
    onError: () => {
      console.log(t('messages.fail.generic'));
    },
  });

  return {
    data: useMemo(() => data || [], [data]),
    isLoading: isLoading || initialLoading,
    isError,
  };
};
