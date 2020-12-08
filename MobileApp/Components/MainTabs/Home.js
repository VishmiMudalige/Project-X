import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import Notification from './Notification';

const Tab = createBottomTabNavigator();

export default function HomeScreen({navigation}) {
    return (
           <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#212121',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Notification}
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="store" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Notification}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-search" color={color} size={size} />
          ),
   
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 1,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Notification}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
    );
}


