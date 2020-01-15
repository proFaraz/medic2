import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { WebBrowser } from 'expo';


import { MonoText } from '../components/StyledText';
import { H1 } from 'native-base';

// description 

const panadol_discript = 'Relieving mild to moderate pain such as headache, migraine, nerve pain (neuralgia), toothache, sore throat, earache, period pain and rheumatic and muscular aches and pains. Relieving aches, pains, fever and discomfort associated with colds and flu';
const ponstan_discript = 'Mefenamic acid belongs to the class of medications called nonsteroidal anti-inflammatories (NSAIDs). It is used to relieve moderately severe pain, such as muscular aches and pains, menstrual cramps, headaches, and dental pain';
const ceclor_discript = 'Cefaclor is used to treat certain infections caused by bacteria, such as pneumonia and other lower respiratory tract (lung) infections; and infections of the skin, ears, throat, tonsils, and urinary tract';
const penbritin_discript = 'Penicillins are used to treat infections caused by bacteria. They work by killing the bacteria or preventing their growth. There are several different kinds of penicillins. Each is used to treat different kinds of infections';
const cefirant_discript = 'Cefixime is used to treat a wide variety of bacterial infections. This medication is known as a cephalosporin antibiotic. It works by stopping the growth of bacteria.This antibiotic treats only bacterial infections. It will not work for viral infections (e.g., common cold, flu)';
const polyfax_discript = 'Polyfax Ointment is a skin ointment, which contains the active ingredients polymyxin B sulphate and bacitracin zinc. Polymyxin B sulphate and bacitracin zinc are antibacterials. Polyfax Ointment is used to help prevent infection of the skin following: minor burns';
// image

const medImages = {
  capImg: require('../assets/images/cap.png'),
  tabImg: require('../assets/images/tab.png'),
  syrupImg: require('../assets/images/syrup.png'),
  syringImg: require('../assets/images/syringe.png'),
  ointImg: require('../assets/images/ointment.png'),
}


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>

            <H1 style={{ color: '#ffffff', fontWeight: 'bold', fontFamily: 'space-mono' }}>
              Popular Medicines
            </H1>
          </View>
          <TouchableOpacity
            onPress={
              () => navigate(
                'Details',
                {
                  _medName: 'Panadol',
                  _formulaName: 'Paracetamol',
                  _companyName: 'GSK',
                  _medType: 'tablet',
                  _description: panadol_discript,
                })
            }
          >

            <View style={styles.medContainer}>
              <Image
                resizeMode='contain'
                source={medImages.tabImg}
                style={styles.medPicContainer}
              />


              <View style={styles.medPropContainer}>
                <View style={styles.medNameStyle}>
                  <Text style={styles.medTextStyle}>Panadol</Text>
                </View>
                <View style={styles.medFormulaStyle}>
                  <Text style={styles.medFormulaTextStyle}>Paracetamol</Text>
                </View>
              </View>

            </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={
              () => navigate({
                key: Math.random() * 9999,
                routeName: 'Details',
                params: {
                  _medName: 'Ponstan',
                  _formulaName: 'Mefenamic Acid',
                  _companyName: 'Pfizer',
                  _medType: 'tablet',
                  _description: ponstan_discript,

                }
              })
              
            }
          >

            <View style={styles.medContainer}>
              <Image
                resizeMode="contain"
                source={medImages.tabImg}
                style={styles.medPicContainer}
              />

              <View style={styles.medPropContainer}>
                <View style={styles.medNameStyle}>
                  <Text style={styles.medTextStyle}>Ponstan</Text>
                </View>
                <View style={styles.medFormulaStyle}>
                  <Text style={styles.medFormulaTextStyle}>Mefenamic Acid</Text>
                </View>
              </View>
            </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={
              () => navigate(
                'Details',
                {
                  _medName: 'Ceclor',
                  _formulaName: 'Cefaclor',
                  _companyName: 'AGP',
                  _medType: 'capsule',
                  _description: ceclor_discript,

                })
            }
          >

            <View style={styles.medContainer}>
              <Image
                resizeMode="contain"
                source={medImages.capImg}
                style={styles.medPicContainer}
              />

              <View style={styles.medPropContainer}>
                <View style={styles.medNameStyle}>
                  <Text style={styles.medTextStyle}>Ceclor</Text>
                </View>
                <View style={styles.medFormulaStyle}>
                  <Text style={styles.medFormulaTextStyle}>Cefaclor</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={
              () => navigate(
                'Details',
                {
                  _medName: 'Penbritin',
                  _formulaName: 'Ampicillin',
                  _companyName: 'GSK',
                  _medType: 'syringe',
                  _description: penbritin_discript,

                })
            }
          >

            <View style={styles.medContainer}>
              <Image
                resizeMode="contain"
                source={medImages.syringImg}
                style={styles.medPicContainer}
              />

              <View style={styles.medPropContainer}>
                <View style={styles.medNameStyle}>
                  <Text style={styles.medTextStyle}>Penbritin</Text>
                </View>
                <View style={styles.medFormulaStyle}>
                  <Text style={styles.medFormulaTextStyle}>Ampicillin</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={
              () => navigate(
                'Details',
                {
                  _medName: 'Cefirant',
                  _formulaName: 'Cefixime',
                  _companyName: 'Amarant',
                  _medType: 'syrup',
                  _description: cefirant_discript,
                })
            }
          >

            <View style={styles.medContainer}>
              <Image
                resizeMode="contain"
                source={medImages.syrupImg}
                style={styles.medPicContainer}
              />

              <View style={styles.medPropContainer}>
                <View style={styles.medNameStyle}>
                  <Text style={styles.medTextStyle}>Cefirant</Text>
                </View>
                <View style={styles.medFormulaStyle}>
                  <Text style={styles.medFormulaTextStyle}>Cefixime</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={
              () => navigate(
                'Details',
                {
                  _medName: 'Polyfax',
                  _formulaName: 'Bacitracin',
                  _companyName: 'GSK',
                  _medType: 'ointment',
                  _description: polyfax_discript,
                })
            }
          >

            <View style={styles.medContainer}>
              <Image
                resizeMode="contain"
                source={medImages.ointImg}
                style={styles.medPicContainer}
              />

              <View style={styles.medPropContainer}>
                <View style={styles.medNameStyle}>
                  <Text style={styles.medTextStyle}>Polyfax</Text>
                </View>
                <View style={styles.medFormulaStyle}>
                  <Text style={styles.medFormulaTextStyle}>Bacitracin</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,

  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: '#00939f',

  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  imageStyle: {
    backgroundColor: '#704a6c'
  },

  // Custom Styling 

  medContainer: {
    flex: 1,
    width: 500,
    height: 110,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  medPicContainer: {
    flex: 1,
    width: 100,
    height: 100,
    position: 'absolute',
    flexGrow: 0,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#48a0b4'

  },

  medPropContainer: {
    flex: 1,
    width: 100,
    height: 50,
    flexGrow: 4,
    paddingLeft: 10,

  },

  medNameStyle: {
    flex: 1,
    width: 400,
    height: 100,
    marginLeft: 100,
  },

  medFormulaStyle: {
    flex: 1,
    width: 400,
    height: 100,
    marginLeft: 100,
    paddingLeft: 10,
    paddingBottom: 30,
  },

  medTextStyle: {
    fontWeight: 'bold',
    fontSize: 30,

  },

  medFormulaTextStyle: {
    fontWeight: 'bold',
    fontSize: 20,

  },

});
