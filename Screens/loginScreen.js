import * as React from 'react';
import {
  Text,
  View,
  TextInput, 
  TouchableOpacity, 
  Alert,  
  ScrollView,
  Image, 
  ImageBackground
} from 'react-native';
import firebase from 'firebase';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


// Main axis - justifyContent
// Cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin & padding

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  login = (email, password) => {
    //Error handling/ validations
    if (this.state.email && this.state.password) { 
      firebase 
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          Alert.alert('Successfully Login');
          this.props.navigation.replace('Dashboard')
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
          source={require('../assets/bball.jpeg')}
          style={{ width: '100%', height: '100%' }}>
          <ScrollView>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: '10%',
                marginTop: '30%',
                color:'white'
              }}>
              Login
            </Text>
            <Text style={{ marginLeft: '10%', marginTop: 5, color:'white' }}>
              Don't Have an account?{' '}
              <Text
                style={{ color: 'yellow' }}
                onPress={() => {
                  this.props.navigation.replace('SignUp');
                }}>
                Create an Account!
             </Text>
            </Text>

            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: 30,
                alignSelf: 'center',
                marginTop: 50,
                borderRadius: 7,
                padding: 3,
                backgroundColor:'rgba(10,10,10,0.5)'
              }}>
              <Feather name="user" size={20} color="white" />
              <TextInput
                style={{ width: '90%', paddingLeft: 20, color:'white' }}
                placeholder="Enter Email"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ email: val });
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: 30,
                alignSelf: 'center',
                marginTop: 30,
                borderRadius: 7,
                backgroundColor:'rgba(10,10,10,0.5)',
                padding: 3,
              }}>
              <Ionicons name="key-outline" size={22} color="white" />
              <TextInput
                style={{ width: '90%', paddingLeft: 20, color:'white' }}
                placeholder="Enter Password"
                placeholderTextColor="white"

                onChangeText={(val) => {
                  this.setState({ password: val });
                }}
              />
            </View>

            
              <Text
                style={{ color: 'rgb(0, 0, 300)', marginLeft:175 }}
                onPress={() => {
                  this.props.navigation.replace('ForgotPassword');
                }}>
                Forgot Password?
              </Text>
            

            <TouchableOpacity
              style={{ 
                borderRadius: 20,
                width: '40%',
                alignSelf: 'center',
                backgroundColor:'rgba(10,10,10,0.5)',
                height: 35,
                marginTop: 20,
                justifyContent: 'center',
                elevation: 10,
              }}
              onPress={() => {
                if(this.state.email && this.state.password){
                this.login(this.state.email, this.state.password);
                }else{
                  alert('Please fill all the details!')
                }
              }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 30, alignSelf: 'center' }}>
              Or Login with
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

