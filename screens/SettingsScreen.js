import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { MonoText } from '../components/StyledText';
import { H3, Thumbnail } from 'native-base';



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topSection}>

          <Image
            resizeMode='contain'
            source={require('../assets/images/med-logo2.png')}
            style={styles.picContainerLogo}
          />

          <View>
            <Text style={{ fontSize: 50, marginLeft: 100 }}>MEDIC</Text>
          </View>
        </View>
        <View style={styles.midSection}>
          <View>
            <Text style={{ color: '#c5c5c5', marginLeft: 110 }}>App v1.0</Text>
          </View>
          <View style={styles.desContainer}>
            <Text>
              This App is Created and owned by a sole proprietor
              <MonoText> Shaikh Faraz Uddin </MonoText>
              the App is created using
              <MonoText style={{ backgroundColor: '#dddddd' }}> React Native</MonoText>
              <Text> a</Text> Javascript Framework used to make cross-platform Applications with
              Native features
            </Text>
            <H3 style={styles.techHeader}>
              SK-Technologies
              </H3>

          </View>
        </View>

        <View style={styles.botSection}>
          <Text style={{ position: 'absolute', paddingTop: 40 }}>Built with</Text>
          <Image
            resizeMode='contain'
            source={require('../assets/images/react-native-logo.png')}
            style={styles.picContainer}
          />
        </View>
        <View style={styles.botSectionNew}>
          <Text>Powered By</Text>
          <Thumbnail
            resizeMode='contain'
            large
            source={require('../assets/images/yoga-layout.png')}
          />
          <Text>Yoga Layout Engine</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',

  },

  picContainerLogo: {
    flex: 1,
    width: 100,
    height: 100,
    flexGrow: 0,
    position: 'absolute',
  },

  picContainer: {
    width: 200,
    height: 200,

  },

  topSection: {
    flex: 1,
    flexDirection: 'row'
  },

  midSection: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',

  },

  desContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  botSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  botSectionNew: {
    flex: 1,
    paddingBottom: 20,

  },

  techHeader: {
    paddingTop: 5,
    fontFamily: 'space-mono',
  }

});
