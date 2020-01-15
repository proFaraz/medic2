import React, { Component } from 'react';
import {
   View,
   ScrollView,
   TouchableOpacity,
   FlatList,
   ActivityIndicator
} from 'react-native';
import {
   Content,
   Icon,
   Card,
   CardItem,
   Text,
   Body,
   Left,
   Right,
   Thumbnail,
   H2,
   H3
} from "native-base";
import { MonoText } from '../components/StyledText';


const medImages = {
   capImg: require('../assets/images/cap.png'),
   tabImg: require('../assets/images/tab.png'),
   syrupImg: require('../assets/images/syrup.png'),
   syringeImg: require('../assets/images/syringe.png'),
   ointImg: require('../assets/images/ointment.png'),
}


export default class DetailsScreen extends Component {
   constructor(props) {
      super(props);
      this.state = {
         _medNew: this.props.navigation.state.params._medName,
         _forNew: this.props.navigation.state.params._formulaName,
         _compNew: this.props.navigation.state.params._companyName,
         _desNew: this.props.navigation.state.params._description,
         _typeNew: this.props.navigation.state.params._medType,

         loading: false,
         data: [],
         error: null,
         refreshing: false,
      };
      this.arrayholder = [];
   }

   static navigationOptions =
      {
         title: 'Medicine Detail',
      };

   _meddyImg() {
      switch (this.state._typeNew) {
         case 'tablet':
            return medImages.tabImg;
         case 'capsule':
            return medImages.capImg;
         case 'syringe':
            return medImages.syringeImg;
         case 'injection':
            return medImages.syringeImg;
         case 'ointment':
            return medImages.ointImg;
         case 'syrup':
            return medImages.syrupImg;
         default:
            return null;
      }
   };

   _meddyImg2(type) {
      switch (type) {
         case 'tablet':
            return medImages.tabImg;
         case 'capsule':
            return medImages.capImg;
         case 'syringe':
            return medImages.syringeImg;
         case 'injection':
            return medImages.syringeImg;
         case 'ointment':
            return medImages.ointImg;
         case 'syrup':
            return medImages.syrupImg;
         default:
            return null;
      }
   };


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
               refreshing: false,
            });
            this.arrayholder = resJson;
         })
         .catch(error => {
            this.setState({ error, loading: false });
         });
   };

   _renderItem({ item }) {
      const { navigate } = this.props.navigation;
      if (this.state._forNew === item.formula_name) {
         return (   
            <TouchableOpacity
               onPress={
                  () => navigate({
                     key: Math.random() * 9999,
                     routeName: 'Details',
                     params: {
                        _medName: item.medicine_name,
                        _formulaName: item.formula_name,
                        _companyName: item.company_name,
                        _medType: item.type,
                        _description: item.description,
                     }
                  })
               }
            >
                { this.state._medNew !== item.medicine_name ? 
               <CardItem>
                  <Left>
                     <Thumbnail
                        source={this._meddyImg2(item.type)}
                        resizeMode="contain"
                        style={{ borderWidth: 2, borderColor: '#006666' }}
                     />
                     <View style={{ flexDirection: 'column' }}>
                        <Text>{item.medicine_name}</Text>
                        <MonoText style={{ marginLeft: 40 }}>{item.formula_name}</MonoText>
                     </View>
                  </Left>
                  <Right>
                     <Icon name='arrow-forward' />
                  </Right>
               </CardItem>
                  : <View style={{width: 1, height: 0.1}}></View> }
            </TouchableOpacity>
         )
      }
      else { return <View style={{width: 1, height: 0.1}}></View>; }
   };






   //   {this.state._textNew} use this states prop to show data of clicked object

   render() {
      const { navigate } = this.props.navigation;
      if (this.state.loading) {
         return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
               <ActivityIndicator />
            </View>
         );
      }

      return (
         <ScrollView style={styles.container}>
            <Content padder>
               <Card style={styles.mb}>
                  <CardItem>
                     <Body>
                        <Thumbnail
                           large
                           source={this._meddyImg()}
                           style={{ marginBottom: 10 }}
                           resizeMode='contain'
                        />
                        <H2>Medicine Name</H2>
                        <Text>{this.state._medNew}</Text>
                     </Body>
                  </CardItem>
                  <CardItem>
                     <Body>
                        <H2>Formula Name</H2>
                        <Text>{this.state._forNew}</Text>
                     </Body>
                  </CardItem>
                  <CardItem>
                     <Body>
                        <H2>Type</H2>
                        <Text>{this.state._typeNew}</Text>
                     </Body>
                  </CardItem>
                  <CardItem>
                     <Body>
                        <H2>Company Name</H2>
                        <Text>{this.state._compNew}</Text>
                     </Body>
                  </CardItem>
                  <CardItem>
                     <Body>
                        <H3>Description</H3>
                        <Text>{this.state._desNew}</Text>
                     </Body>
                  </CardItem>
               </Card>
            </Content>

            <Content padder>
               <Card>
                  <CardItem header bordered>
                     <Text>Similar Medicines</Text>
                  </CardItem>
                 
                  <FlatList
                     data={ this.state.data }
                     renderItem={ this._renderItem.bind(this) }
                     keyExtractor={ (item) => item.medicine_name }
                     removeClippedSubviews={ false }
                  />
               </Card>
            </Content>
         </ScrollView>
      );
   }
}

const styles = {
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },

   mb: {
      marginBottom: 15,
   },


}
