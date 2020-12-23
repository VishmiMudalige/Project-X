import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import BottomTab from './../Layout/BottomTab';

const Tab = createBottomTabNavigator();

export default function HomeScreen({navigation}) {
    return (
        <BottomTab/>
    );
}


