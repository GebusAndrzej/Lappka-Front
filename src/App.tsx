import React from 'react';
// import { Counter } from './features/counter/Counter';
import Home from './pages/public/Home/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


function App(): JSX.Element {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/2" exact component={Home} isAuthenticated={false} />
    </Router>
  );
}

export default App;
