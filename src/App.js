import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './App.scss';

import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'


function App() {
  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/quiz-app" component={Home} />
        <Route exact path="/quiz-app/play" component={Quiz} />
        <Redirect to="/quiz-app/not-found"/>
      </Switch>
    </BrowserRouter>
  </>

}

export default App
