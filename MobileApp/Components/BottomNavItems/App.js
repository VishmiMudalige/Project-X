import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';
import BasketContainer from './components/BasketComponent';
import Footer from './components/Footer';

export default class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ItemsContainer />
        <BasketContainer />
        <Footer />
      </View>
      
    );
  }
}

