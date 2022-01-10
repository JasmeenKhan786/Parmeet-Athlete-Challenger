 import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Main axis - justifyContent
// Cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin & padding

export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/lebron.png')}
          style={{ width: '100%', height: '100%' }}>
          <ScrollView>
         
           
<View style={{flexDirection:'row', marginTop:'20%',justifyContent:'space-around', marginHorizontal:'5%'}}>
            <Text 
              style={{
                fontSize: 22,
                fontWeight: 'bold', 
                color: 'white',
              }}>
              ForgotPassword
            </Text>

               <TouchableOpacity
              style={{
              }}
                onPress={() => {
                  this.props.navigation.replace('Login');
                }}>
                <AntDesign name="back" size={24} color="white" />
              </TouchableOpacity>

</View>
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
                style={{ width: '90%', paddingLeft: 20, color: 'white' }}
                placeholder="Enter Email"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ email: val });
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#1D58EE',
                borderRadius: 20,
                width: '70%', 
                alignSelf: 'center',
                height: 35,
                marginTop: 20,
                justifyContent: 'center',
                elevation: 10, 
              }} 
              onPress={() => {
                if (this.state.email) {
                  firebase  
                    .auth() 
                    .sendPasswordResetEmail(this.state.email)
                    .then(() => {
                      alert('Please check you mail! Email to reset password is sent!')
                    })
                    .catch((error) => {
                      var errorCode = error.code;
                      var errorMessage = error.message;
                      alert(errorMessage)
                    });
                } 
                else{
                  alert('Please enter a valid email, registered with us!')
                }
              }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>
                Send Reset Password Link
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
