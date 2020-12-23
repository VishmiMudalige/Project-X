/**
 * @format
 */
import React, { Component, Fragment } from 'react';
import { Divider } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  Button,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import RNSettings from 'react-native-settings';
import SettingsSlider from "./../BottomNavItems/SettingsSlider/SettingsSlider";

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export default class Settings extends Component {
  state = { locationOn: false, airplaneOn: false, captioningOn: false, search: ''};

  componentDidMount() {
    RNSettings.getSetting(RNSettings.LOCATION_SETTING).then(result => {
      if (result === RNSettings.ENABLED) {
        this.setState({ locationOn: true });
      } else {
        this.setState({ locationOn: false });
      }
    });

    if (Platform.OS === 'android') {
      RNSettings.getSetting(RNSettings.AIRPLANE_MODE_SETTING).then(result => {
        if (result === RNSettings.ENABLED) {
          this.setState({ airplaneOn: true });
        } else {
          this.setState({ airplaneOn: false });
        }
      });

      RNSettings.getSetting(RNSettings.CAPTIONING_SETTINGS).then(result => {
        if (result === RNSettings.ENABLED) {
          this.setState({ captioningOn: true });
        } else {
          this.setState({ captioningOn: false });
        }
      });

      // Register to gps provider change event
      DeviceEventEmitter.addListener(
        RNSettings.GPS_PROVIDER_EVENT,
        this.handleGPSProviderEvent,
      );
      // Register to airplane mode change event
      DeviceEventEmitter.addListener(
        RNSettings.AIRPLANE_MODE_EVENT,
        this.handleAirplaneModeEvent,
      );
      // Register to captioning change event
      DeviceEventEmitter.addListener(
        RNSettings.CAPTIONING_EVENT,
        this.handleCaptioningEvent,
      );
    }
  }

  handleGPSProviderEvent = e => {
    if (e[RNSettings.LOCATION_SETTING] === RNSettings.ENABLED) {
      this.setState({ locationOn: true });
    } else {
      this.setState({ locationOn: false });
    }
  };
  
  updateSearch = (search) => {
    this.setState({ search });
  };

  handleAirplaneModeEvent = e => {
    if (e[RNSettings.AIRPLANE_MODE_SETTING] === RNSettings.ENABLED) {
      this.setState({ airplaneOn: true });
    } else {
      this.setState({ airplaneOn: false });
    }
  };

  handleCaptioningEvent = e => {
    if (e[RNSettings.CAPTIONING_SETTINGS] === RNSettings.ENABLED) {
      this.setState({ captioningOn: true });
    } else {
      this.setState({ captioningOn: false });
    }
  };

  openLocationSetting = () => {
    if (Platform.OS === 'ios') {
      Alert.alert(
        'Not supported!',
        'Not supported on IOS just yet. Stay tuned ~_~',
      );
      return;
    }
    RNSettings.openSetting(RNSettings.ACTION_LOCATION_SOURCE_SETTINGS).then(
      result => {
        if (result === RNSettings.ENABLED) {
          this.setState({ locationOn: true });
        } else {
          this.setState({ locationOn: false });
        }
      },
    );
  };

  openAirplaneSetting = () => {
    if (Platform.OS === 'ios') {
      Alert.alert(
        'Not supported!',
        'Not supported on IOS just yet. Stay tuned ~_~',
      );
      return;
    }
    RNSettings.openSetting(RNSettings.ACTION_AIRPLANE_MODE_SETTINGS).then(
      result => {
        if (result === RNSettings.ENABLED) {
          this.setState({ airplaneOn: true });
        } else {
          this.setState({ airplaneOn: false });
        }
      },
    );
  };

  openCaptioningSetting = () => {
    if (Platform.OS === 'ios') {
      Alert.alert(
        'Not supported!',
        'Not supported on IOS just yet. Stay tuned ~_~',
      );
      return;
    }
    RNSettings.openSetting(RNSettings.ACTION_CAPTIONING_SETTINGS).then(
      result => {
        if (result === RNSettings.ENABLED) {
          this.setState({ captioningOn: true });
        } else {
          this.setState({ captioningOn: false });
        }
      },
    );
  };

  render() {
    const asterisk =
      Platform.OS === 'ios' ? (
        <Text style={styles.notSupportedText}>
          {' '}
          * Not supported yet on iOS.
        </Text>
      ) : (
        <Text />
      );

    const { locationOn, airplaneOn, captioningOn } = this.state;
    const { search } = this.state;

    return (
      <Fragment>
        <SearchBar
        placeholder="Search Here..."
        onChangeText={this.updateSearch}
        value={search}
        lightTheme={true}
      />
        <View style={styles.container}>
          <Text></Text>
          
          <SettingRow
            name="Location"
            on={locationOn}
            onAvailable
            onPress={this.openLocationSetting}
            onPressAvailable={Platform.OS !== 'ios'}
          />
          <Divider style={{ backgroundColor: 'blue' }} />
          <SettingRow
            name="Airplane Mode"
            on={airplaneOn}
            onAvailable={Platform.OS !== 'ios'}
            onPress={this.openAirplaneSetting}
            onPressAvailable={Platform.OS !== 'ios'}
          />
          <SettingRow
            name="Captioning"
            on={captioningOn}
            onAvailable={Platform.OS !== 'ios'}
            onPress={this.openCaptioningSetting}
            onPressAvailable={Platform.OS !== 'ios'}
          />
          {asterisk}
          <SettingsSlider /> 
        </View>

      </Fragment>
    );
  }
}

const SettingRow = ({ name, onAvailable, onPressAvailable, onPress, on }) => {
  let status = <Text />;

  if (onAvailable) {
    status = on ? (
      <Text style={styles.greenText}> ON</Text>
    ) : (
      <Text style={styles.redText}> OFF</Text>
    );
  } else {
    status = <Text style={styles.blackText}> N/A*</Text>;
  }

  return (
    <View style={styles.settingRowContainer}>
      <Text style={styles.text}>{name}:</Text>
      {status}
      <Icon
  raised
  name='cog'
  type='font-awesome'
  color='#f50'
  onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  settingRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Screen.width / 1.1,
    marginBottom: 20
  },
  title: { marginTop: 20, marginBottom: 20 },
  notSupportedText: { marginTop: 40 },
  redText: { color: '#f50', fontSize: 15 },
  greenText: { color: 'green', fontSize: 15 },
  blackText: { color: 'black', fontSize: 15 },
  text: { fontSize: 15, color: 'grey' },
});

