/* eslint-disable no-console */
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import GlobalStyle from '../theme/GlobalStyle';
import Header from '../components/header/header';
import GreetingPage from './greeting/greetingPage';

const AboutPage = React.lazy(() => import('./about/aboutPage'));

const App = () => {
  const { i18n } = useTranslation();

  const [languagePl, setLanguagePl] = useState(true);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguagePl(!languagePl);
  };

  return (
    <>
      <GlobalStyle />
      <Header changeLanguage={changeLanguage} languagePl={languagePl} />
      <Switch>
        <Route exact path="/">
          <GreetingPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
