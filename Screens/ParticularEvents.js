import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
//JSX

//Component LIfecycle
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
    var response = await db.collection('myEvents').where('email', '==', firebase.auth().currentUser.email).get();
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
            My Events
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
 
        <ScrollView>
          <ScrollView>
            {this.state.events.length===0?  <View
              style= {{ flex: 1, justifyContent: "center", alignItems: "center" , marginTop:'30%'}}>
              <Text style={{ color: "white" , fontSize:18}}>
                No Events Joined Yet!
              </Text>
            </View>:this.state.events.map((a) => {
              return (
                <View
                key={a.id}
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    flex:1,
                    marginTop: 10,
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
                      <View
                        style={{
                          backgroundColor: 'white',
                          padding: 10,
                          borderRadius: 10,
                        }}>
                        <Text>Going</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              );
            })}
          </ScrollView>


        
        </ScrollView>
      </View>
    );
  }
}
