import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './App.scss';

import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'


function App() {
  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/quiz" component={Home} />
        <Route exact path="/quiz/play" component={Quiz} />
        <Redirect to="/quiz/not-found"/>
      </Switch>
    </BrowserRouter>
  </>

}

export default App
