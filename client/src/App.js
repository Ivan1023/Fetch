import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/NavBar/Nav'
import Main from './pages/MainPage/Main'
import Offline from './pages/OfflinePage/OfflineMode'
import Profile from './pages/ProfilePage/Profile'
import Setting from './components/Settings/Setting'
import Interest from './components/Interest/Interest'
import './App.scss';

class App extends React.Component {
//   state = {
//     search: ""
//   }

//   submitHandler = (childData) => {
//     // event.preventDefault()

//     // const searchValue = event.target.search
//     // console.log(searchValue)

//     this.setState({search : childData})
    
// }
render () {
  // console.log(this.state);
  
  return (
    <BrowserRouter>
      {/* <Nav submit={this.submitHandler}/> */}
      <Nav/>
      <Switch>
        <Route path="/" exact component={Main}/>
        {/* <Route path="/offline/:id" render={clickHandler(props)}/> */}
        <Route path="/offline/:category/:id?" render={(props) => <Offline {...props}/>}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/setting" exact component={Setting}/>
        <Route path="/interest" exact component={Interest}/>
        <Route path="/:category" exact component={Main}/>
      </Switch>
    </BrowserRouter>
  );

}
}

export default App;
