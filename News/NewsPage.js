import React, { Component, } from 'react'
import { View, Text, ListView, RefreshControl, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux';

class NewsPage extends Component {
  constructor(props){
    super(props);
    
    // 每一个ListView都需要一个数据源，称为`DataSource`。rowHasChanged用来比较前后的数据是否相同，相同则不重新渲染。
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.url !== r2.url });
    // 先初始化一个空的数组，供存放列表数据
    this._data = [];
    // 可变状态
    this.state = {
      // dataSource是ListView显示的一个必须属性，cloneWithRows用于传入数据。
      dataSource: this.ds.cloneWithRows(this._data),
      // 控制下拉刷新的状态
      isRefreshing: false
    };
    // 加载第一次数据
    this._onRefresh();
  }
  
  // 触发下拉刷新
  _onRefresh = () => {
    // 首先更改状态为true
    this.setState({isRefreshing: true});
    var self = this;
    // 开启网络请求
    fetch('http://v.juhe.cn/weixin/query?pno=1&ps=20&key=1cb0962fb0fb73dae41d96e88733ac96')
    // 对数据做处理，这里没有写catch，应该写的，捕获错误
      .then((response) => response.json())
      .then((responseJson) => {
        // 看一下是否是成功，成功：先清空本地数据，然后将新的数据加入。因为是下拉刷新，上拉加载的功能自行研究。已经很简单了。
        if (responseJson.reason == 'success') {
          let data = responseJson.result.list;
          if (data) {
            this._data = data;
          }
        }
        self.setState({
          dataSource: this.ds.cloneWithRows(this._data),
          isRefreshing: false
        });
      })
  }
  
  // 用来渲染行的方法，将数据转为Cell进行展示。
  _renderRow (rowData, sectionID, rowID) {
    return (
      <TouchableOpacity
        onPress={()=>this._pressRow(rowData)}>
        <View style={styles.cell}>
          <Image
            style={styles.cellImage}
            source={{ uri: rowData.firstImg }} />
          <View style={styles.cellColumn}>
            <Text style={styles.cellText} numberOfLines={0}>{rowData.title}</Text>
            <Text style={styles.cellExtra}>#{rowData.source}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  
  _pressRow = (rowData) => {
    Actions.NewsDetail({
      url: rowData.url,
      type: ActionConst.PUSH
    });
  }
  
  render() {
    return (
      <View style={{ flex: 1, marginTop: 44, marginBottom: 49}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
              tintColor="rgb(181, 181, 181)"
              title="下拉刷新数据"
              titleColor="rgb(181, 181, 181)"
              colors={['rgb(181, 181, 181)', 'rgb(181, 181, 181)', 'rgb(181, 181, 181)']}
            />
          }
        />
      </View>
    )
  }
}

const contentWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cell: {
    padding: 10,
    paddingTop: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  cellImage: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(221, 221, 221)'
  },
  cellText: {
    textAlign: 'left',
    marginLeft: 10,
    width: contentWidth - 75,
  },
  cellExtra: {
    fontSize: 10,
    color: 'rgb(181, 181, 181)',
    marginLeft: 10
  },
  cellColumn: {
    flexDirection: 'column'
  }
});

export default NewsPage