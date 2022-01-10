import * as React from 'react';
import {
  Text,
  View,   
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import db from '../Config';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Entypo } from '@expo/vector-icons';
//JSX

//Component Lifecycle
// 1. mounting
// 2. updating
// 3. unmounting

//functions
//states (store values inside a class)
//props (passing values between components)

export default class AllEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      name: '',
      description: '',
      location: '',
      date: null,
      time: '',
      events: [],
    };
  }
  getEvents = async () => { 
    this.setState({ events: [] });
    var response = await db.collection('events').get();
    response.docs.map((a) => {
      var temp = this.state.events;
      var data = a.data();
      data.id = a.id;
      temp.push(data);
      this.setState({ events: temp }); 
    });
  };
  componentDidMount() {
    this.getEvents();
  }
  addMyEvent = (a) => {
    db.collection('myEvents').add({
      name: a.name,
      description: a.description,
      location: a.location,
      time: a.time,
      date: a.date,
      email: firebase.auth().currentUser.email, 
    });
    alert('Yaay! you have joined this event!');
  };
  addEvent = () => {
    db.collection('events').add({
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      time: this.state.time,
      date: this.state.date,
      organizedBy: firebase.auth().currentUser.email,
    });
    alert('event created');
    this.setState({
      modalVisible: false,
    });
    this.getEvents();
  };
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 40, backgroundColor: 'black' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: '5%',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: 'white',
              width: '60%',
            }}>
            Choose your Event
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
 </View>
           <TouchableOpacity
           style={{backgroundColor:'purple', width:'60%', height:40, marginVertical:10, borderRadius:10, justifyContent:'center', alignItems:'center', alignSelf:'center'}}
            onPress={() => {
              this.setState({ modalVisible: true });
            }}>
            <Text style={{ color: 'white' }}>+ Add Event</Text>
          </TouchableOpacity>

        

        <ScrollView>
          <ScrollView>
            { this.state.events.length ===0 ?
            <View
            style= {{ flex: 1, justifyContent: "center", alignItems: "center" , marginTop:'30%'}}>
            <Text style={{ color: "white" , fontSize:18}}>
              Loading... 
            </Text>
          </View>
            :this.state.events.map((a) => {
              return (
                <View
                key={a.id}
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                    flex:1
                  }}>
                  <LinearGradient
                    colors={['#42378f', '#f53844']}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 10,
                      paddingVertical: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}>
                        {a.name}
                      </Text>
                      <View>
                        <Text style={{ color: 'white' }}>{a.date}</Text>
                        <Text style={{ color: 'white' }}>{a.time}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 15,
                        marginHorizontal: 10,
                        alignItems: 'center',
                      }}>
                      <Entypo name="location-pin" size={20} color="white" />
                      <Text style={{ color: 'white' }}>{a.location}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 15, 
                        marginHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{ color: 'white', width:'70%' }}>{a.description}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          this.addMyEvent(a);
                        }}
                        style={{
                          backgroundColor: 'white',
                          padding: 10,
                          borderRadius: 10,
                        }}>
                        <Text>Join</Text>
                      </TouchableOpacity>
                    </View>
                  </LinearGradient>
                </View>  
              );   
            })}
          </ScrollView> 
         
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}>
            <View
              style={{
                backgroundColor:'#9795ef',
                width: '100%',
                height: 800,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: false });
                }}>
                <Text style={{marginTop: 30, marginLeft: 30}}>X</Text>
              </TouchableOpacity>

              <Text style={{textAlign:'center', fontWeight:'bold', marginTop: 20}}>Please add your event details below!</Text>
              <TextInput
                style={{
                  backgroundColor: '#ccc',
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  paddingLeft: 10,
                  borderRadius: 10,
                  marginTop: 20
                }}
                placeholder="Name of Event"
                onChangeText={(val) => {
                  this.setState({
                    name: val,
                  });
                }}
              />
              <TextInput
                style={{
                  backgroundColor: '#ccc',
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  paddingLeft: 10,
                  borderRadius: 10,
                  marginTop: 10,
                }}
                placeholder="Description"
                onChangeText={(val) => {
                  this.setState({
                    description: val,
                  });
                }}
              />
              <TextInput
                style={{
                  backgroundColor: '#ccc',
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  paddingLeft: 10,
                  borderRadius: 10,
                  marginTop: 10,
                }}
                placeholder="Location"
                onChangeText={(val) => {
                  this.setState({
                    location: val,
                  });
                }}
              />
              <View style={{alignSelf:'center', width:'90%',marginTop:10, color:'black'}}> 
              <DatePicker
              style={{width:'100%'}}
                showIcon={false}
                androidMode="spinner"
               customStyles={{
            dateInput: {
              backgroundColor: 'rgba(20,20,20,0.5)',
            },
          }}
                date={this.state.date}
                mode="date"
                placeholder="Date"
                format="DD-MM-YYYY" 
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(date) => {
                  this.setState({ date: date });
                }}
              />
              </View>
              <TextInput
                style={{
                  backgroundColor: '#ccc',
                  width: '90%',
                  height: 40,
                  alignSelf: 'center',
                  paddingLeft: 10,
                  borderRadius: 10,
                  marginTop: 10,
                }}
                placeholder="Time"
                onChangeText={(val) => {
                  this.setState({
                    time: val,
                  });
                }}
              />

              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  width: '40%',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(10,10,10,0.5)',
                  height: 35,
                  marginTop: 20,
                  justifyContent: 'center',
                  elevation: 10,
                }}
                onPress={() => {
                  this.addEvent();
                }}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  Add Event
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}
