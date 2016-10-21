import React, { Component, } from 'react';
import { View, Text, StyleSheet, TabBarIOS } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import NewsPage from './News/NewsPage';
import AccountPage from './Account/AccountPage';

class RootPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: "newsTab" };
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="darkgrey"
        tintColor="#34A3FF"
        barTintColor="white">
        <TabBarIOS.Item
          title="News"
          systemIcon="featured"
          selected={this.state.selectedTab === 'newsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'newsTab'
            });
          } }>
          <NewsPage />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Account"
          systemIcon="contacts"
          selected={this.state.selectedTab === 'accountTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'accountTab'
            });
          } }>
          <AccountPage />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  };
}

export default RootPage