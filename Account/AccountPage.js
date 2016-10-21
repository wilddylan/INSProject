import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Account from './Account'

class AccountPage extends Component {
  render() {
    return (
      <Router>
        <Scene key="_AccountPage">
          <Scene key="Account" component={Account} title="Account" initial={true} />
        </Scene>
      </Router>
    )
  }
}

export default AccountPage