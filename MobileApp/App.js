import * as React from 'react';
import {StatusBar} from 'react-native';
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
                <Drawer.Screen name="Home" component={HomeStackScreen}/>
                <Drawer.Screen name="Notifications" component={NotificationStackScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

