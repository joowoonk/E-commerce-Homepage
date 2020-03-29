import React from 'react';

import { Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import { auth , createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

  


class App extends React.Component {

 unsubscribeFromAuth = null;

 componentDidMount() {
    const {setCurrentUser} = this.props;

   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
           setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
              })
            });
         }
          //     this.setState({
      //       currentUser: {
      //         id: snapshot.id,
      //         ...snapshot.data()
      //       }
      //     })
      //     // console.log(this.state)
      //   })
      //  }
      setCurrentUser(userAuth);
   });
 }

 componentWillUnmount() {
   this.unsubscribeFromAuth();
 }


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


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
