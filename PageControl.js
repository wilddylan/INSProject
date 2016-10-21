import React, { Component, } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

class PageControl extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let number = this.props.number;
    let index = this.props.index;
    var items = new Array();
    
    let screenWidth = Dimensions.get('window').width;
    
    let containerPosition = {
      width: number * 20,
      position: 'absolute',
      left: (screenWidth - number * 20) / 2.0,
      top: this.props.top
    };
    for (var i=0; i<number; i++) {
      let item = (
        <View style={[(i == index ? styles.itemHighLight : styles.item), styles.itemSize]} key={i} ></View>
      );
      items.push(item);
    }
    return (
      <View style={[styles.container, containerPosition]}>
        {items}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    width: 50,
    marginTop: 40
  },
  itemSize: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  item: {
    backgroundColor: 'white',
    borderColor: '#34a3ff',
    borderWidth: 1
  },
  itemHighLight: {
    backgroundColor: 'skyblue'
  }
});

export default PageControl