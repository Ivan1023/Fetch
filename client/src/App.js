import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/NavBar/Nav'
import Main from './pages/MainPage/Main'
import Offline from './pages/OfflinePage/OfflineMode'
import Profile from './pages/ProfilePage/Profile'
import Setting from './components/Settings/Setting'
import Interest from './components/Interest/Interest'
import './App.scss';

function App() {
  
  
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Main}/>
        {/* <Route path="/offline/:id" render={clickHandler(props)}/> */}
        <Route path="/offline/:id" render={(props) => <Offline {...props}/>}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/setting" exact component={Setting}/>
        <Route path="/interest" exact component={Interest}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
