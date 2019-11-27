import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/NavBar/Nav'
import Main from './pages/MainPage/Main'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
