import React from 'react';
// import { Counter } from './features/counter/Counter';
import Home from './pages/public/Home/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Wrapper from './pages/private/Panel/Wrapper';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './static/cssStatic';
import Dashboard from './pages/private/Panel/Dashboard/Dashboard';
import Shelters from './pages/private/Panel/Shelters/Shelters';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>

      <Router>
        <Route path="/" exact component={Home} />

        <PrivateRoute path="/dashboard" exact component={() => <Wrapper title="Dashboard" child={<Dashboard />} />} isAuthenticated={true} />
        <PrivateRoute path="/messages" exact component={() => <Wrapper title="Wiadomości" />} isAuthenticated={true} />
        <PrivateRoute path="/pets" exact component={() => <Wrapper title="Karty Zwierząt" />} isAuthenticated={true} />
        <PrivateRoute path="/volounteering" exact component={() => <Wrapper title="Wolontariat" />} isAuthenticated={true} />

        <PrivateRoute path="/shelters" exact component={() => <Wrapper title="Schroniska" child={<Shelters />} />} isAuthenticated={true} />
        <PrivateRoute path="/shelters/add" exact component={() => <Wrapper title="Schroniska" child={<Shelters />} />} isAuthenticated={true} />
        <PrivateRoute path="/shelters/edit/{id}" exact component={() => <Wrapper title="Schroniska" child={<Shelters />} />} isAuthenticated={true} />

      </Router>
    </ThemeProvider>
  );
}

export default App;
