import React, { useState, useEffect }  from 'react';
import {StatusBar, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from "./Components/MainTabs/Home";
import {DrawerContent} from './Components/DrawerContent';
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import {
    Provider as PaperProvider,
} from 'react-native-paper';

import Profile from "./Components/MainTabs/Profile";
import Purchase from "./Components/MainTabs/Purchase";
import Settings from "./Components/MainTabs/Settings";
import Feedback from "./Components/MainTabs/Feedback";
import LoginScreen from "./Components/User/Login";
import SignupScreen from "./Components/User/Signup";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PurchaseStack = createStackNavigator();
const HelpStack = createStackNavigator();
const LocateStack = createStackNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{title: 'Home', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <ProfileStack.Screen name="Profile" component={Profile} options={{title: 'Profile', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </ProfileStack.Navigator>
);

const PurchaseStackScreen = ({navigation}) => (
    <PurchaseStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <PurchaseStack.Screen name="Purchase" component={Purchase} options={{title: 'Purchase', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </PurchaseStack.Navigator>
);


const SettingsStackScreen = ({navigation}) => (
    <HelpStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <HelpStack.Screen name="Settings" component={Settings} options={{title: 'Settings', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </HelpStack.Navigator>
);

const FeedBackStackScreen = ({navigation}) => (
    <LocateStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <LocateStack.Screen name="Feedback" component={Feedback} options={{title: 'Feedback', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </LocateStack.Navigator>
);

const _retrieveData = async (key) => {
      try {
        const data = await AsyncStorage.getItem(key);
        return data;
      } catch (error) {
        console.log(error);
      }
    }

export default function App() {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#009387');
    
    
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
       setTimeout(() => {
   	   setIsLoading(false);
       }, 3000);
    });
    
    useEffect(() => {
        setInterval(() => {
   	    _retrieveData('loginToken').then((user)=>{
   	    if(user !== undefined && user !== null){
   	       setIsLoggedIn(true);
   	    }else{
   	       setIsLoggedIn(false);
   	    }
     
     });  
   	   
       }, 1000);
    });
    
    
    

    if(isLoading){
        return (<LoadingScreen />);
    }else if (isLoggedIn) {
        return (<PaperProvider >
            <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={HomeStackScreen} />
                    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
                    <Drawer.Screen name="Purchase" component={PurchaseStackScreen} />
                    <Drawer.Screen name="Settings" component={SettingsStackScreen} />
                    <Drawer.Screen name="FeedBack" component={FeedBackStackScreen} />

                </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>) ;
     }else{
            return (
                  <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
                  
         );
      }


}

