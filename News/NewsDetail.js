import React, { Component, } from 'react'
import { Actions } from 'react-native-router-flux';
import { WebView, StyleSheet } from 'react-native';

class NewsDetail extends Component {
  render() {
    return (
      <WebView
        ref="DetailWebView"
        automaticallyAdjustContentInsets={false}
        style={styles.webView}
        source={{uri: this.props.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    marginTop: 44,
  }
});

export default NewsDetail