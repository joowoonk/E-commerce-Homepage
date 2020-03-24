import React, { Component } from 'react';

import { Switch, Route, Link} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = (props) => {
  console.log(props)
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>

  )
}

  


class App extends Component {
  render() {
    return(
      <div className='App'>
        <Switch>
          <Route exact path='/' >
            <HomePage /> 
          </Route>
          <Route path='/hats'  >
            <HatsPage />
          </Route>

        </Switch>
      </div>
    )
  
  }
}

export default App;
