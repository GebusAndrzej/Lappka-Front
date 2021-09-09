import React from 'react';

import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './static/cssStatic';
import RouterComponent from './components/RouterComponent';
// import LocalStorageService from './features/localStorageService';
// import SessionAuth from './components/SessionAuth';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>

      <RouterComponent />
      {/* <SessionAuth>
        <RouterComponent />
      </SessionAuth> */}

    </ThemeProvider>
  );
}

export default App;
