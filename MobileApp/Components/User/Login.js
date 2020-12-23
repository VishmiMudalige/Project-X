import React from 'react';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, ScrollView} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from "@react-native-community/google-signin";
import AsyncStorage from '@react-native-async-storage/async-storage';



import {useTheme} from 'react-native-paper';

const _storeData = async () => {
  try {
    await AsyncStorage.setItem("loginToken", "sasasas");
  } catch (error) {
    console.log(error);
  }
}

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const {colors} = useTheme();


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#2e8b57',
        }}>
            <StatusBar backgroundColor='#2e8b57' barStyle="light-content"/>
            <View style={{
                    flex: 1,
        	    justifyContent: 'flex-end',
                    paddingHorizontal: 20,
                    paddingBottom: 50,
                }}>
                <Text style={{color: '#fff',
        fontWeight: 'bold',
        fontSize: 30}}>Hello!</Text>
            
            </View>
           
            <Animatable.View
                animation="fadeInLeft"
                style={{
                    backgroundColor: "#fff",
                    marginLeft:10,
                    marginRight:10,
 		    marginBottom: 10,
	            flex: 6,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 50,
                     borderBottomLeftRadius: 50,
		    borderBottomRightRadius: 3,
                    paddingHorizontal: 20,
                    paddingVertical: 30,
                }}
            >
                 <ScrollView>
                
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Username"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: colors.text,
                        }]}
                        autoCapitalize="none"
                        onChangeText={() => {
                        }}
                        onEndEditing={() => {
                        }}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </Animatable.View>
                }


                <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 35,
                }]}></Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry}
                        style={[styles.textInput, {
                            color: colors.text,
                        }]}
                        autoCapitalize="none"
                        onChangeText={() => {
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                        }}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
               
                </View>
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }


                <TouchableOpacity>
                    <Text style={{color: '#2e8b57', marginTop: 15}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={_storeData}
                    >
                        <LinearGradient
                            colors={['#2e8b57', '#00b488']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff',
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignupScreen')}
                        style={[styles.signIn, {
                            borderColor: '#2e8b57',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#2e8b57',
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                 <View  style={{ alignItems: "center" }}>
               <GoogleSigninButton style={{ width: 192, height: 48, marginTop: 10 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Light}
    onPress={() => {}}/>
            </View>
            </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    headText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
