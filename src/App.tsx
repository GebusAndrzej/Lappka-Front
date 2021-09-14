import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './static/cssStatic';
import RouterComponent from './components/RouterComponent';
import { readToken } from './features/localStorageService';
import { refreshAuth } from './features/auth/authSlice';
import { useAppDispatch } from './app/hooks';

function App(): JSX.Element {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = readToken()

    if (token) {
      //login
      dispatch(refreshAuth(token))
    }

  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>

      <RouterComponent />

    </ThemeProvider>
  );
}

export default App;
