import React, { useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import styled from 'styled-components';
import LoaderDots from './helpers/loader';
import App from './pages/App';
import './i18n';
import reportWebVitals from './reportWebVitals';
import { queryClient } from './api';

const Loading = styled.div`
  position: absolute;
  width: 100vw;
  top: 50%;
  margin-right: auto;
  margin-left: auto;
`;

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <Suspense
    fallback={
      <Loading>
        <LoaderDots />
      </Loading>
    }
  >
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
