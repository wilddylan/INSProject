import React, { Component, } from 'react'
import { View, ScrollView, TouchableOpacity, Dimensions, Text, StyleSheet } from 'react-native'
import ScrollContent from './ScrollContent';
import PageControl from './PageControl';

class GuidePage extends Component {
  constructor(props) {
    super(props)
    this.state = { currentIndex: 0 };
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    let pageControlTop = screenWidth / 2.0 + 300;
    let objectNum = this.props.objects.length;
    
    var scrollItems = new Array();
    for (var i=0; i<objectNum; i++) {
      let obj = this.props.objects[i];
      let item = (
        <ScrollContent uri={obj.uri} title={obj.title} detail={obj.detail} subDetail={obj.subDetail} key={i}/>
      );
      scrollItems.push(item);
    }
    return (
      <View style={styles.container}> 
        <ScrollView 
          style={styles.scrollView} 
          horizontal={true}  
          showsHorizontalScrollIndicator={false}  
          alwaysBounceHorizontal={true}  
          pagingEnabled={true}  
          onScroll={(event: Object) => {
            let caluIndex = parseInt(event.nativeEvent.contentOffset.x / screenWidth);
            this.setState({ currentIndex: caluIndex });
          }} 
          >
          {scrollItems}
        </ScrollView>
        <PageControl number={objectNum} index={this.state.currentIndex} top={pageControlTop}/>
        <TouchableOpacity onPress={() => {}} activeOpacity={50 / 100}>
            { 
              this.state.currentIndex == objectNum - 1 ? 
              (<Text style={ styles.enterButton }>Enter</Text>): (null)
            }
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white'
  },
  enterButton: {
    position: 'absolute',
    left: (Dimensions.get('window').width - 70) / 2.0,
    bottom: 15,
    color: '#34A3FF',
    fontSize: 17,
    fontWeight: "400",
    borderWidth: 1,
    borderColor: '#34A3FF',
    borderRadius: 3,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  }
});

export default GuidePage