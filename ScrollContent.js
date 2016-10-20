import React, { Component, } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import PageControl from './PageControl';

class ScrollContent extends Component {

  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <View style={ styles.container }>
          <Image source={{ uri: this.props.uri }} style={ styles.image }/>
          <Text style={ styles.title }>{this.props.title}</Text>
          <Text style={ styles.detail }>{this.props.detail}</Text>
          <Text style={ styles.subDetail }>{this.props.subDetail}</Text>
          <PageControl style={styles.pageControl} number={3} index={this.props.index}/>
        </View>
        <View style={ styles.buttonGroup }>
          <TouchableOpacity onPress={() => {}} activeOpacity={50 / 100}>
            { 
              this.props.showEnter == true? 
              (<Text style={ styles.enterButton }>Enter</Text>): (null)
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const contentWidth = Dimensions.get('window').width;
const contentHeight = Dimensions.get('window').height - 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: contentWidth,
    height: contentHeight
  },
  image: {
    width: 253,
    height: 200
  },
  title: {
    fontSize: 24,
    color: '#358ED7',
    fontWeight: "400",
    marginTop: 50
  },
  detail: {
    fontSize: 14,
    color: '#1D1D26',
    fontWeight: "400",
    marginTop: 20
  },
  subDetail: {
    fontSize: 14,
    color: '#1D1D26',
    fontWeight: "400",
    marginTop: 2
  },
  buttonGroup: {
    height: 60,
    width: contentWidth,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  enterButton: {
    marginTop: 10,
    padding: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    color: '#34A3FF',
    fontSize: 17,
    borderColor: '#34A3FF',
    borderRadius: 3
  }
});

export default ScrollContent