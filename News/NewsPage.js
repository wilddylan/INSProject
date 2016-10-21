import React, { Component, } from 'react'
import { View, } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';
import News from './News'

class NewsPage extends Component {
  render() {
    return (
      <Router>
        <Scene key="_NewsRouter">
          <Scene 
            key="News" 
            component={News} 
            title="News" 
            navigationBarStyle={{ backgroundColor: 'white' }}
            titleStyle={{color: '#525354', fontFamily: 'Helvetica', fontSize: 20}} 
            initial={true} />
        </Scene>
      </Router>
    )
  }
}

export default NewsPage