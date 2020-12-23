import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import Notification from './../MainTabs/Notification';
import Browse from './../BottomNavItems/Browse';
import Cart from './../BottomNavItems/Cart';
import Notifications from './../BottomNavItems/Notifications';
import Search from './../BottomNavItems/Search';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab({navigation}) {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Home"
                component={Browse}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#2e8b57',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarColor: '#2e8b57',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarColor: '#2e8b57',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-notifications" color={color} size={26} />
                    ),
                    tabBarBadge: 3
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarColor: '#2e8b57',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-cart" color={color} size={26} />
                    ),
                    tabBarBadge: 3
                }}
            />
        </Tab.Navigator>
    );
}


