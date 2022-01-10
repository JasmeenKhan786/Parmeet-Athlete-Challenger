import * as React from 'react';
import {
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
// import db from '../config';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      address: '',
    };
  }

  signup = () => {
    if ( 
      this.state.email && 
      this.state.password &&
      this.state.address && 
      this.state.name
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
          Alert.alert('successfully created account');
          this.props.navigation.replace('Dashboard');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    } else {
      alert('Please fill all the details!');
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
     
        <ImageBackground
          source={require('../assets/steph.png')}
          style={{ width: '100%', height: '100%' }}>
          <ScrollView>
          
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: '10%',
                marginTop: '30%',
                color:'white', 
                flexDirection:'row'
              }}>
              Register
            </Text>
            <Text style={{ marginLeft: '10%', marginTop: 5 }}></Text>
 
            <Text style={{ marginLeft: '10%', marginTop: 5, color:'white' }}>
              Already have an Account?{' '}
              <Text
                style={{ color: 'yellow' }}
                onPress={() => {
                  this.props.navigation.replace('Login');
                }}>
                Login!
             </Text>
            </Text>
    
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                height: 30,
                alignSelf: 'center',
                marginTop: 50,
                borderRadius: 7,
                padding: 3,
              }}>
              <Feather name="user" size={20} color="white" />
              <TextInput
                style={{ width: '90%', paddingLeft: 20, color:'white' }}
                placeholder="Enter Name "
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ name: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                height: 30,
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 7,
                padding: 3,
              }}>
              <Entypo name="address" size={24} color="white" />
              <TextInput
                style={{ width: '90%', paddingLeft: 20, color:'white' }}
                placeholder="Enter Email Address"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ email: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                height: 30,
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 7,
                padding: 3,
              }}>
              <Feather name="user" size={20} color="white" />
              <TextInput
                style={{ width: '90%', paddingLeft: 20, color:'white' }}
                placeholder="Enter Address"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ address: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: '80%',
                height: 30,
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 7,
                padding: 3,
              }}>
              <Ionicons name="key" size={24} color="white" />
              <TextInput
                style={{ width: '90%', paddingLeft: 20, color:'white' }}
                placeholder="Enter Password"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ password: val });
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#1D58EE',
                borderRadius: 20,
                width: '40%',
                alignSelf: 'center',
                height: 35,
                marginTop: 20,
                justifyContent: 'center',
                elevation: 10,
              }}
              onPress={() => { 
                  this.signup();
              }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>
                Register
              </Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 30, alignSelf: 'center', color:'white' }}>
              Or Register with
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 30,
              }}> 
                <TouchableOpacity onPress={()=>{
                  alert('Feature work in progress!')
                }}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png',
                }}
                style={{ width: 50, height: 50, marginHorizontal: 10 }}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{  
                  alert('Feature work in progress!')
                }}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Google_Plus_icon_%282015-2019%29.svg/2048px-Google_Plus_icon_%282015-2019%29.svg.png',
                }}
                style={{ width: 50, height: 50, marginHorizontal: 10 }}
              />
              </TouchableOpacity>

            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
