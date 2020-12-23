import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';
import BasketContainer from './components/BasketComponent';
import Footer from './components/Footer';

export default function Cart({navigation}) {
    return (
        <View style={{ flex: 1 }}>
        <Footer />
        <Header />
        <ItemsContainer />
        <BasketContainer />

      </View>
    );
}



