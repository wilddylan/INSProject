import React, { Component, } from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Account from './Account'

class AccountPage extends Component {
  render() {
    return (
      <Router>
        <Scene key="_AccountPage">
          <Scene 
            key="Account" 
            component={Account} 
            title="Account" 
            navigationBarStyle={{ backgroundColor: 'white' }}
            titleStyle={{color: '#525354', fontFamily: 'Helvetica', fontSize: 20}} 
            initial={true} />
        </Scene>
      </Router>
    )
  }
}

export default AccountPage