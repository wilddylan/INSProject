import React, { Component, } from 'react'
import { View, StyleSheet } from 'react-native'

class PageControl extends Component {

  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    var number = this.props.number;
    var index = this.props.index;
    var items = new Array();
    for (var i=0; i<number; i++) {
      var item = (
        <View style={i == index ? styles.itemHighLight : styles.item} key={i} ></View>
      );
      items.push(item);
    }
    return (
      <View style={styles.container}>
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
  item: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#34a3ff',
    borderWidth: 1
  },
  itemHighLight: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'skyblue'
  }
});

export default PageControl