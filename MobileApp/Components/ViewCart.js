import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

export default function ViewCart({navigation}) {

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{marginLeft: 20}}>
                    <Title style={[styles.title, {
                        marginTop: 15,
                        marginBottom: 5,
                    }]}>Round Iron</Title>
                    <Caption style={styles.caption}>Rs 1200(one unit) </Caption>
                </View>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                        source={{
                            uri: 'http://www.reliancetrading.net/media/img/1497869615.jpg',
                        }}
                        size={180}
                    />

                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1,
                }]}>
                    <Title>Rs 1200</Title>
                    <Caption>Total</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>1</Title>
                    <Caption>Units</Caption>
                </View>

            </View>
            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1,
                }]}>
                    <TouchableRipple onPress={() => {
                    }}>
                        <View style={styles.menuItem}>
                            <Icon name="plus-circle" color="#2e8b57" size={25}/>
                        </View>
                    </TouchableRipple>
                </View>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1,
                }]}>
                    <TouchableRipple onPress={() => {
                    }}>
                        <View style={styles.menuItem}>
                            <Icon name="minus-circle" color="#2e8b57" size={25}/>
                        </View>
                    </TouchableRipple>
                </View>

            </View>



            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {
                }}>
                    <View style={styles.menuItem}>
                        <Icon name="cart-outline" color="#fff" size={25}/>
                        <Text style={styles.menuItemText}>Add to cart</Text>
                    </View>
                </TouchableRipple>

            </View>
        </SafeAreaView>
</ScrollView>

);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        width: '100%',
        alignItems: 'center',

    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
        backgroundColor: '#2e8b57',
        borderRadius: 5,
        marginBottom:10
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#fff',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

