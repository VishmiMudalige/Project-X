import React from 'react';
import { View, Text } from 'react-native';
import TotalComp from './TotalComponent';
import PaystackWebView from "react-native-paystack-webview";

const Footer = () => {
  const {
    containerStyle,
    buttonContainerStyle,
    closeButtonStyle,
    checkoutButtonStyle } = styles;
  return (
    <View style={containerStyle}>
      <TotalComp />
      <View style={buttonContainerStyle}>
        <View style={closeButtonStyle}>
          <Text style={{ color: '#fff' }}>Close</Text>
        </View>

        <View style={checkoutButtonStyle}>
          <Text style={{ color: '#fff' }}>
              <PaystackWebView
        buttonText="Go to checkout"
        showPayButton={true}
        paystackKey="pk_test_f5a7f70af48cf43b113e6cd028705ff356c74eb8"
        amount={120000}
        billingEmail="paystackwebview@something.com"
        billingMobile="09787377462"
        billingName="Oluwatobi Shokunbi"
        ActivityIndicatorColor="red"
        SafeAreaViewContainer={{ marginTop: 25 }}
        refNumber={3434343} // this is only for cases where you have a reference number generated
        SafeAreaViewContainerModal={{ marginTop: 25 }}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={false}
      />
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  closeButtonStyle: {
    backgroundColor: '#7f8c8d',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 3,
  },
  checkoutButtonStyle: {
    backgroundColor: '#ef5350',
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 3,
  }
};

export default Footer;



