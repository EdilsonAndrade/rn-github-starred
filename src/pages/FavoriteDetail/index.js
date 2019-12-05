import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default class FavoriteDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    return (
      <WebView source={{ uri: item.html_url }} style={{ marginTop: 20 }} />
    );
  }
}
