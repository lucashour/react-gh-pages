import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Nav from '../common/Nav';
import Home from '../home/Home';
import Battle from '../battle/Battle';
import Popular from '../popular/Popular';
import Results from '../results/Results';
import * as Routes from '../../services/routes';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Nav />

          <Switch>
            <Route exact path={Routes.HOME} component={Home} />
            <Route exact path={Routes.BATTLE} component={Battle} />
            <Route path={Routes.BATTLE_RESULTS} component={Results} />
            <Route path={Routes.POPULAR} component={Popular} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
