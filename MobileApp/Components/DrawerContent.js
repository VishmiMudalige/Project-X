import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

async function clearAsyncStorage(){
    AsyncStorage.clear();
}

export function DrawerContent(props) {

    const paperTheme = useTheme();

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://avatars1.githubusercontent.com/u/61949881?s=460&u=093cb2d9dcd3f29f054c3143a7dd06569b928975&v=4'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Shihara Dilshan</Title>
                                <Caption style={styles.caption}>shihara@gmail.com</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>

                            </View>

                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon={({color, size}) => (
                        <Icon
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="calendar-check"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Purchase History"
                            onPress={() => {props.navigation.navigate('Purchase')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="hammer-wrench"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="head-question-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Help & feedback"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={clearAsyncStorage}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      margin: 0,
        padding: 0,

    },
    userInfoSection: {
      paddingLeft: 14,
        marginTop: -10,
        padding: 0,
        backgroundColor: '#e3e3e3'
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
