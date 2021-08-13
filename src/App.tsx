import React from 'react';
// import { Counter } from './features/counter/Counter';
import Home from './pages/public/Home/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Wrapper from './pages/private/Panel/Wrapper';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './static/cssStatic';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>
      <Router>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/dashboard" exact component={() => <Wrapper title="Dashboard" />} isAuthenticated={true} />
        <PrivateRoute path="/messages" exact component={() => <Wrapper title="Wiadomości" />} isAuthenticated={true} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
