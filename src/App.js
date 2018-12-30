import React, { Component } from 'react';
import LandingPage from './Components/LandingPage/LandingPage'
import Tasks from './Components/TaskGroup1/TasksGroup1'
import Tasks2 from './Components/TaskGroup2/TasksGroup2'
import './App.css'
import {HashRouter, Switch, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <HashRouter>
      <Switch>
        <Route exact path = '/' component={LandingPage}/>
        <Route path = '/tasks' component={Tasks}/>
        <Route path = '/tasks2' component={Tasks2}/>
      </Switch>

      </HashRouter>
    );
  }
}

export default App;
