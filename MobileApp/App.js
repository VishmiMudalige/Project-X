import * as React from 'react';
import {StatusBar, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./Components/MainTabs/Home";
import NotificationsScreen from "./Components/MainTabs/Notification";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{title: 'Home', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </HomeStack.Navigator>
);

const NotificationStackScreen = ({navigation}) => (
    <NotificationStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'},
    }}>
        <NotificationStack.Screen name="Notification" component={NotificationsScreen} options={{title: 'Notification', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={ () => navigation.openDrawer()}></Icon.Button>) }} />
    </NotificationStack.Navigator>
);


export default function App() {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#009387');

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="Notifications" component={NotificationStackScreen}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="person-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="history" component={NotificationStackScreen}
        options={{
          title: 'Purchase history',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="receipt-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="settings" component={NotificationStackScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="settings-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
       
        <Drawer.Screen name="help" component={NotificationStackScreen}
        options={{
          title: 'Get help',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="hand-left-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="locate" component={NotificationStackScreen}
        options={{
          title: 'Locate Us',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="location-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        <Drawer.Screen name="payment" component={NotificationStackScreen}
        options={{
          title: 'Payment methodes',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="card-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        
         <Drawer.Screen name="share" component={NotificationStackScreen}
        options={{
          title: 'Share',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="share-social-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        
        <Drawer.Screen name="connect" component={NotificationStackScreen}
        options={{
          title: 'Connect With Us',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="logo-facebook"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        
        <Drawer.Screen name="website" component={NotificationStackScreen}
        options={{
          title: 'Visit our web',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="earth"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        
         <Drawer.Screen name="report" component={NotificationStackScreen}
        options={{
          title: 'Report an incident',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="warning"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        
        <Drawer.Screen name="feedback" component={NotificationStackScreen}
        options={{
          title: 'Give feedback',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="fitness-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
        
        <Drawer.Screen name="signout" component={NotificationStackScreen}
        options={{
          title: 'Sign out',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="exit-outline"
              size={size}
              color={focused ? '#000' : '#ccc'}
            />
          ),
        }}/>
         
         
            </Drawer.Navigator>
            
            
        </NavigationContainer>
    );
}

