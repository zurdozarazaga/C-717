import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Layout from '../components/Layout';
import Montajes from '../components/Montajes';
import Desmontajes from '../components/Desmontajes';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/Montajes' component={Montajes} />
        <Route exact path='/Desmontajes' component={Desmontajes} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
