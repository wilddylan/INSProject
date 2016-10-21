import React, { Component, } from 'react'
import { View, Text } from 'react-native'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

class Account extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 64}}>
        <Text>This is Account component!</Text>
      </View>
    )
  }
}

export default Account