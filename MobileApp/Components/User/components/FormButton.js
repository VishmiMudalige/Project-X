import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Dimensions } from "react-native";


const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 50,
    width: '100%',
    height: Dimensions.get('window').height / 15,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009387',
    fontFamily: 'Lato-Regular',
  },
});
