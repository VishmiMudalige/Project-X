import * as React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./Components/MainTabs/Home";
import NotificationsScreen from "./Components/MainTabs/Notification";
import {DrawerContent} from './Components/DrawerContent';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';


import Profile from "./Components/MainTabs/Profile";
import Purchase from "./Components/MainTabs/Purchase";
import Help from "./Components/MainTabs/Help";
import Locate from "./Components/MainTabs/Locate";
import Payment from "./Components/MainTabs/Payment";
import Share from "./Components/MainTabs/Share";
import Connect from "./Components/MainTabs/Connect";
import Settings from "./Components/MainTabs/Settings";
import Visitus from "./Components/MainTabs/Visitus";
import Report from "./Components/MainTabs/Report";
import Feedback from "./Components/MainTabs/Feedback";
import Signout from "./Components/MainTabs/Signout";

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PurchaseStack = createStackNavigator();
const HelpStack = createStackNavigator();
const LocateStack = createStackNavigator();
const PaymentStack = createStackNavigator();
const ShareStack = createStackNavigator();
const ConnectStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const VisitusStack = createStackNavigator();
const ReportStack = createStackNavigator();
const FeedbackStack = createStackNavigator();
const SignoutStack = createStackNavigator();

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


const HelpStackScreen = ({navigation}) => (
    <HelpStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <HelpStack.Screen name="Help" component={Help} options={{title: 'Help', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </HelpStack.Navigator>
);

const LocateStackScreen = ({navigation}) => (
    <LocateStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <LocateStack.Screen name="Locate" component={Locate} options={{title: 'Locate', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </LocateStack.Navigator>
);

const PaymentStackScreen = ({navigation}) => (
    <PaymentStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <PaymentStack.Screen name="Payment" component={Payment} options={{title: 'Payments', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </PaymentStack.Navigator>
);

const ShareStackScreen = ({navigation}) => (
    <ShareStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <ShareStack.Screen name="Share" component={Share} options={{title: 'Share', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </ShareStack.Navigator>
);

const ConnectStackScreen = ({navigation}) => (
    <ConnectStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <ConnectStack.Screen name="Connect" component={Connect} options={{title: 'Connect', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </ConnectStack.Navigator>
);

const SettingStackScreen = ({navigation}) => (
    <SettingsStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <SettingsStack.Screen name="settings" component={Settings} options={{title: 'Settings', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </SettingsStack.Navigator>
);

const VisitStackScreen = ({navigation}) => (
    <VisitusStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <VisitusStack.Screen name="visit" component={Visitus} options={{title: 'Visit Us', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </VisitusStack.Navigator>
);

const ReportStackScreen = ({navigation}) => (
    <ReportStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <ReportStack.Screen name="visit" component={Report} options={{title: 'Report', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </ReportStack.Navigator>
);

const FeedbackStackScreen = ({navigation}) => (
    <FeedbackStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <FeedbackStack.Screen name="visit" component={Feedback} options={{title: 'Feedback', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </FeedbackStack.Navigator>
);

const SignoutStackScreen = ({navigation}) => (
    <SignoutStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'}
    }}>
        <SignoutStack.Screen name="visit" component={Signout} options={{title: 'Sign Out', headerLeft: () => (<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>) }} />
    </SignoutStack.Navigator>
);

function MenuSingleItem({focused,size,icon}){
    return(
        <View
            style={
                focused
                    ? {
                        borderLeftColor: '#009387',
                        borderLeftWidth: 2,
                        paddingLeft: 5,
                    }
                    : null
            }>
            <Icon
                name={icon}
                size={size}
                color={focused ? '#009387' : 'grey'}
            />
        </View>
    )
}

export default function App() {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#009387');

    return (
        <PaperProvider >

            <NavigationContainer>

                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
                    <Drawer.Screen name="SupportScreen" component={HomeStackScreen} />
                    <Drawer.Screen name="SettingsScreen" component={HomeStackScreen} />
                    <Drawer.Screen name="BookmarkScreen" component={HomeStackScreen} />
                </Drawer.Navigator>


            </NavigationContainer>

        </PaperProvider>
    );
}


