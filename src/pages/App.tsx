/* eslint-disable no-console */
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import GlobalStyle from '../theme/GlobalStyle';
import Header from '../components/header/header';
import LandingPage from './landingPage/landingPage';

const AboutPage = React.lazy(() => import('./aboutPage/aboutPage'));

const Layout = styled.div`
  max-width: 132rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

export interface IContextData {
  nickname: string;
  setNickname: (value: string) => void;
  languagePl: boolean;
  changeLanguage: (lng: string) => void;
}

export const ContextDefaultValue: IContextData = {
  nickname: '',
  setNickname: (value) => value,
  languagePl: true,
  changeLanguage: (lng) => lng,
};

export const AppContext = React.createContext<IContextData>(ContextDefaultValue);

const App = () => {
  const { i18n } = useTranslation();
  const [languagePl, setLanguagePl] = useState(true);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguagePl(!languagePl);
  };

  const [nickname, setNickname] = useState('');

  return (
    <>
      <GlobalStyle />
      <AppContext.Provider value={{ nickname, setNickname, languagePl, changeLanguage }}>
        <Header />
        <Layout>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Layout>
      </AppContext.Provider>
    </>
  );
};

export default App;
