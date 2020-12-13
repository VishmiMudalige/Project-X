import * as React from 'react';
import {Button, View, Text, ScrollView } from 'react-native';
import MyCarousel from "./../MainTabs/Carousel/MyCarousel";
import BrowseSlider from './BrowseSlider/BrowseSlider';

export default function Browse({navigation}) {
    return (
        <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <BrowseSlider />
            
            <MyCarousel />
            <MyCarousel />
        </View>
         </ScrollView>
    );
}


