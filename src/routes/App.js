import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Layout from '../components/Layout';
import Montajes from '../components/Montajes';
import Desmontajes from '../components/Desmontajes';
import Activos from '../components/Activos';
import Vencimientos from '../components/Vencimientos';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/Montajes' component={Montajes} />
        <Route exact path='/Desmontajes' component={Desmontajes} />
        <Route exact path='/Activos' component={Activos} />
        <Route exact path='/Vencimientos' component={Vencimientos} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
