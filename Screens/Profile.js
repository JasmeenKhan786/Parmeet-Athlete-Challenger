import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import db from '../Config';
import firebase from 'firebase';
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      age: 0,
      bloodgroup:'',
      email:firebase.auth().currentUser.email,
      password:firebase.auth().currentUser.email,
      docId:null
      
    };
  }

  getUserProfile=()=>{
     var email = firebase.auth().currentUser.email;
    db.collection("profiles")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            bloodgroup: data.bloodgroup,
            age: data.age,
            address: data.address,
            name: data.name,
            docId:doc.id
          });
        });
      });
    
  }
updateUserProfile = () => {
    db.collection("profiles").doc(this.state.docId).update({
      name:this.state.name,
      address:this.state.address,
      age:this.state.age,
      bloodgroup:this.state.bloodgroup
    });

    alert("Profile Updated Successfully");
  };


 componentDidMount(){
   this.getUserProfile();
 }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>User Profile</Text>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Text>Name: </Text>
          <TextInput
            style={{ borderWidth: 0.5, width: 200, height: 30 }}
            onChangeText={(val) => {
              this.setState({ name: val });
            }}
            value={this.state.name}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Address: </Text>
          <TextInput
            style={{ borderWidth: 0.5, width: 200, height: 70 }}
            onChangeText={(val) => {
              this.setState({ address: val });
            }}
             value={this.state.address}
          />
        </View>

       

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Age: </Text>
          <TextInput
            style={{ borderWidth: 0.5, width: 200, height: 30 }}
            onChangeText={(val) => {
              this.setState({ age: val });
            }}
             value={this.state.age}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Blood Group: </Text>
          <TextInput
            style={{ borderWidth: 0.5, width: 200, height: 30 }}
            onChangeText={(val) => {
              this.setState({ bloodgroup: val });
            }}
             value={this.state.bloodgroup}
          />
        </View>

         <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Email: </Text>
          <TextInput
          disabled
            style={{ borderWidth: 0.5, width: 200, height: 30 }}
            onChangeText={(val) => {
              this.setState({ email: val });
            }}
             value={this.state.email}
          />
        </View>

           <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Password: </Text>
          <TextInput
          disabled
            style={{ borderWidth: 0.5, width: 200, height: 30 }}
            onChangeText={(val) => {
              this.setState({ password: val });
            }}
             value={this.state.password}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            Alert.alert('Form is submitted!!!');
            this.updateUserProfile();
          }}
          style={{
            width: 250,
            height: 40,
            borderColor: 'green',
            borderWidth: 2,
            borderRadius: 20,
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: 'orange',
            marginTop: 30,
          }}>
          <Text style={{ textAlign: 'center' }}>Update</Text>
        </TouchableOpacity>

      
      </View>
    );
  }
}

