/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import ScrollContent from './ScrollContent';

class Project extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          pagingEnabled={true}
          style={styles.scrollView}>
          <ScrollContent 
            uri="http://ocef2grmj.bkt.clouddn.com/Group.png" 
            title="Shopping directly" 
            detail="Know your factories. Know your costs." 
            subDetail="Always ask why." 
            showEnter={false}
            index={0}
            />
          <ScrollContent 
            uri="http://ocef2grmj.bkt.clouddn.com/Clothes-illustration.png" 
            title="Buy shoes" 
            detail="Know your factories. Know your costs." 
            subDetail="Always ask why." 
            showEnter={false} 
            index={1}
            />
          <ScrollContent 
            uri="http://ocef2grmj.bkt.clouddn.com/Group1.png" 
            title="Shopping directly" 
            detail="Know your factories. Know your costs." 
            subDetail="Always ask why." 
            showEnter={true} 
            index={2}
            />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'skyblue'
  }
});

AppRegistry.registerComponent('Project', () => Project);