import React, { Component, } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions
} from 'react-native'

class ScrollContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image source={{ uri: this.props.uri }} style={ styles.image }/>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.detail}>{this.props.detail}</Text>
        <Text style={styles.subDetail}>{this.props.subDetail}</Text>
      </View>
    )
  }
}

const contentWidth = Dimensions.get('window').width;
const contentHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
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
  }
});

export default ScrollContent