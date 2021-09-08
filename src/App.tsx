import React from 'react';

import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './static/cssStatic';
import RouterComponent from './components/RouterComponent';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>

      <RouterComponent />

    </ThemeProvider>
  );
}

export default App;
