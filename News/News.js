import React, { Component, } from 'react'
import { View, Text } from 'react-native'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

class News extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 64, marginBottom: 49}}>
        <Text>This is News component!</Text>
      </View>
    )
  }
}

export default News