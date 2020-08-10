import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StylesProvider, ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalStyle } from 'src/styles/global';
import { theme } from 'src/styles/theme';
import { AppDrawer } from 'src/components/Header';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>函館スイーツデータ管理</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MaterialThemeProvider theme={theme}>
            <GlobalStyle />
            <CssBaseline />
            <AppDrawer title="函館スイーツデータ管理">
              <Component {...pageProps} />
            </AppDrawer>
          </MaterialThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    </>
  );
};

export default App;
