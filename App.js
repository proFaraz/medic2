import React,{ Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StatusBar, StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import AppNavigator from './navigation/AppNavigator';
import AppIntroSlider from 'react-native-app-intro-slider';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
    showRealApp: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      if (this.state.showRealApp) {
        return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        );
      } else {
        return (
          <AppIntroSlider
            slides={slides}
            renderItem={this._renderItem}
            bottomButton
            showSkipButton
            onDone={this._onDone}
            onSkip={this._onDone}
          />

        );
      }

    }
  }

  _onDone = async () => {
    // this.setState({ showRealApp:true });
    AsyncStorage.setItem('NotFirstLaunch', 
      this.setState({ showRealApp: true }));
  };

  _renderItem = ({ item, dimensions }) => (
    <LinearGradient
      style={[
        styles.mainContent,
      ]}
      colors={item.colors}
      start={{ x: 0, y: 0.1 }} 
      end={{ x: 0.1, y: 1 }}
    >
      <Ionicons 
        style={{ backgroundColor: 'transparent' }}
        name={item.icon} 
        size={200} 
        color="white" 
      />
      <View style = {{ marginBottom: 100 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </LinearGradient>
  );

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const slides = [
  {
    key: 'somethun',
    title: 'Welcome To "Medic"',
    text: 'Find the medicine suitable for your needs, with ease!',
    icon: 'md-medkit',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'About App',
    text: 'Use \'Medic\' to Search for Medicines, Related formulae medicine and their medicine detail, before buying at your local Pharmacy to ensure best choice for your needs!',
    icon: 'ios-flask',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'Disclaimer',
    text: 'The App provides Medicinal products guidance but in case of serious illness always consult a certified doctor before use, You\'re all Set Tap on Done to Get Started!',
    icon: 'md-thumbs-up',
    colors: ['#29ABE2', '#4F00BC'],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',

  },

  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});
