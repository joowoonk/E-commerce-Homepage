import React, { Component } from 'react';

import { Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'

  


class App extends Component {
  render() {
    return(
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' >
            <HomePage /> 
          </Route>
          <Route path='/shop'  >
            <ShopPage />
          </Route>
          <Route path='/signin'>
            <SignInAndSignOut />
          </Route>
          

        </Switch>
      </div>
    )
  
  }
}

export default App;
