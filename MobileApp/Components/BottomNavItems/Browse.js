import * as React from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import MyCarousel from './../MainTabs/Carousel/MyCarousel';
import BrowseSlider from './BrowseSlider/BrowseSlider';
import {SocialIcon} from 'react-native-elements';
import OverlayViewer from './../MainTabs/Overlay/Overlay';
import { Divider } from 'react-native-elements';

export default function Browse({navigation}) {
    return (
        <ScrollView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <BrowseSlider/>
                <MyCarousel/>
                <MyCarousel/>
                <MyCarousel/>
                <MyCarousel/>
            </View>
            <View style={{padding: 20}}>
                <SocialIcon
                    title='Follow us on Twitter'
                    button
                    type='twitter'
                />

                <SocialIcon
                    title='Like us on Facebook'
                    button
                    type='facebook'
                />


                <SocialIcon
                    button
                    light
                    title='Follow us on Instagram'
                    type='instagram'
                />



            </View>
            <BrowseSlider/>
        </ScrollView>
    );
}


