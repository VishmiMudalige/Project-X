import React, { useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import FormInput from './components/FormInput';
import FormButton from './components/FormButton';
import SocialButton from './components/SocialButton';

const _storeData = async () => {
  try {
    await AsyncStorage.setItem("loginToken", "sasasas");
  } catch (error) {
    console.log(error);
  }
}


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./icon.png')}
        style={styles.logo}
      />
      <Text style={styles.text}></Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={_storeData}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      
       {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          
        </View>
      ) : null}


     
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#009387',
    flex:1
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
});
