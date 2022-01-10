import * as React from 'react';
import {
  Text, 
  View,
  TouchableOpacity, 
  Image 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';
export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#000' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '5%',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            Home
          </Text>
          <TouchableOpacity
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  this.props.navigation.replace('Login');
                })
                .catch((error) => {
                  // An error happened.
                });
            }}>
            <MaterialIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Image
          style={{
            width: '60%',
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: '10%',
          }}
          source={require('../assets/B.png')}
        />
        <Text
          style={{
            width: '60%',
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: 'bold',
            color:'white'
          }}>
          Success doesn't stop when you get there
        </Text>
        <Text
          style={{
            width: '60%',
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: 'bold',
            color:'white'
          }}>
          - Michael Jordan
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity
          onPress = {()=>{
this.props.navigation.navigate('ZeroToPro')


          }}
            style={{
              width: '45%',
              backgroundColor: 'rgb(255, 204, 0)',
              height: 100,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: 5,
              elevation:10,
              shadowColor:'black', shadowOpacity:0.5,
              shadowRadius:10, shadowOffset:{width:0.4,height:1}
            }}>
            <Entypo name="trophy" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Zero To Pro
            </Text>
          </TouchableOpacity>
          
<TouchableOpacity
           onPress = {()=>{
this.props.navigation.navigate('AllChallenges')


          }}
            style={{
              width: '45%', 
              backgroundColor: 'blue',
              height: 100,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '5%',
                elevation:10,
              shadowColor:'black', shadowOpacity:0.5,
              shadowRadius:10, shadowOffset:{width:0.4,height:1}
            }}>
            <MaterialCommunityIcons name="arm-flex" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Challenges
            </Text>
          </TouchableOpacity> 
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity
           onPress = {()=>{
this.props.navigation.navigate('AllChallenges')


          }}
            style={{
              width: '45%',
              backgroundColor: '#A4202D',
              height: 100,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: 5,
                elevation:10,
              shadowColor:'black', shadowOpacity:0.5,
              shadowRadius:10, shadowOffset:{width:0.4,height:1}
            }}>
            <Entypo name="sports-club" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              My Challenges
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress = {()=>{
this.props.navigation.navigate('AllEvents')


          }}
            style={{
              width: '45%',
              backgroundColor: 'green',
              height: 100,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '5%',
                elevation:10,
              shadowColor:'black', shadowOpacity:0.5,
              shadowRadius:10, shadowOffset:{width:0.4,height:1}
            }}>
            <FontAwesome5 name="basketball-ball" size={30} color="white" />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Events
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
