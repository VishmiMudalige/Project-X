import * as React from 'react';
import {Button, View, Text,StyleSheet, Image, StatusBar } from 'react-native';

export default function LoadingScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#2e8b57'}}>
            <Image
        style={styles.tinyLogo}
        source={require('./logo.png')}
      />
      {/*} <StatusBar hidden /> {*/}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
