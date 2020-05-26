import React from 'react';
import { AppProps } from 'next/app';
import { StylesProvider } from '@material-ui/styles';
import { GlobalStyle } from 'src/styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <StylesProvider injectFirst>
      <GlobalStyle />
      <Component {...pageProps} />
    </StylesProvider>
  </>
);

export default App;
