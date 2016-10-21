import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import News from './News'

class NewsPage extends Component {
  render() {
    return (
      <Router>
        <Scene key="_NewsRouter">
          <Scene key="News" component={News} title="News" initial={true} />
        </Scene>
      </Router>
    )
  }
}

export default NewsPage