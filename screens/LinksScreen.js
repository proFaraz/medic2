import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { ListItem, SearchBar, List } from 'react-native-elements';

const medImages = {
  capImg: require('../assets/images/cap.png'),
  tabImg: require('../assets/images/tab.png'),
  syrupImg: require('../assets/images/syrup.png'),
  syringeImg: require('../assets/images/syringe.png'),
  ointImg: require('../assets/images/ointment.png'),
}

export default class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }


  _meddyImg(type) {
    switch (type) {
      case 'tablet':
        return medImages.tabImg;
      case 'capsule':
        return medImages.capImg;
      case 'injection':
        return medImages.syringeImg;
      case 'syringe':
        return medImages.syringeImg;
      case 'ointment':
        return medImages.ointImg;
      case 'syrup':
        return medImages.syrupImg;
      default:
        return null;
    }

  }

  // _firebaseRequest() {   // this is never used
  //   var config = {
  //     apiKey: "AIzaSyAKp1eu1JfCnng4xhA4z-5qoxLSWyoBtFI",
  //     authDomain: "medic1.firebaseapp.com",
  //     databaseURL: "https://medic1.firebaseio.com",
  //     projectId: "medic1",
  //     storageBucket: "",
  //     messagingSenderId: "765269033811"
  //   };
  //   firebase.initializeApp(config);


  //   firebase.database().ref('Medicine/').once('value', (snapshot) =>
  //     console.log(snapshot.val())
  //   );

  //   // firebase.database().ref('Medicine/8').set(
  //   //   {
  //   //     company_name: 'Golo',
  //   //     description:'some bla bla bla',
  //   //     formula_name:'Axiom',
  //   //     medicine_name:'Alix',
  //   //     type:'capsule'
  //   //   }
  //   // ).then(() => {
  //   //     console.log('Inserted!!');
  //   // }).catch((error) => {
  //   //     console.log(error);
  //   // })

  // }

  componentDidMount() {
    this.makeRemoteRequest();
  }


  makeRemoteRequest = () => {
    const url = `https://medic1.firebaseio.com/Medicine.json`;
    this.setState({
      loading: true,
    });

    fetch(url)
      .then(res => res.json())  // decrypted
      .then(resJson => {
        this.setState({
          data: resJson,
          error: resJson.error || null,
          loading: false,
        });
        this.arrayholder = resJson;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };


  // makeRemoteRequest = () => {
  //   const url = `https://randomuser.me/api/?&results=3`;
  //   this.setState({ loading: true });

  //   fetch(url)
  //     .then(res => res.json())  // decrypted
  //     .then(res => {
  //       this.setState({
  //         data: res.results,
  //         error: res.error || null,
  //         loading: false,
  //       });
  //       this.arrayholder = res.results;
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });
  // };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  // searchFilterFunction = (text) => {
  //   console.log(this.arrayholder);
  //   const newData = this.arrayholder.filter(item => {
  //     const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });
  //   this.setState({
  //     data: newData,
  //   });
  // };

  searchFilterFunction = (text) => {
    console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.medicine_name.toUpperCase()} ${item.formula_name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };


  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search here..."
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        clearIcon
        placeholderTextColor='#b2aeae'
        clearIcon={{ color: '#fffff0' }}
        inputStyle={styles.white}
      />
    );
  };



  render() {
    const { navigate } = this.props.navigation;

    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <ActivityIndicator />
        </View>
      );
    }
    else {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate({
                key: Math.random() * 9999,
                routeName:'Details',
                params:{
                  _medName: item.medicine_name,
                  _formulaName: item.formula_name,
                  _companyName: item.company_name,
                  _medType: item.type,
                  _description: item.description,
                }
              })
            }
            >
              <ListItem
                roundAvatar
                //title={`${item.name.first} ${item.name.last}`}
                title={item.medicine_name}
                //subtitle={item.email}
                subtitle={item.formula_name}
                //avatar={{ uri: item.picture.thumbnail }}
                avatar={this._meddyImg(item.type)}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.medicine_name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
    
    );}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 15,
    backgroundColor: '#fff',
  },
  bigblack: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  white: {
    color: '#fff'
  }
});