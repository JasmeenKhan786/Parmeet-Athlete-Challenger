import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity, 
  ScrollView,
  Image,  
} from 'react-native';
import challenges from '../challenge';
import db from '../Config';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase'; 
const images = [
  'http://cache.boston.com/bonzai-fba/Globe_Photo/2012/02/16/lin__1329460651_4236.jpg',
  'http://d279m997dpfwgl.cloudfront.net/wp/2018/06/0607_bian-tongxi-1-1000x667.jpg',
  'https://swordstoday.ie/wp-content/uploads/2021/03/getobject-47-e1575408347332.jpeg',
];
export default class ChallengeDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      details: [],
      count: 0,
    };
  }
  async componentDidMount() {
    var id = this.props.route.params.selectedID;

    var temp = challenges.filter((d) => {
      return d.id === id;
    });
    var count = await db
      .collection('challenges')
      .where('challengeId', '==', id)
      .get();
    this.setState({ details: temp, count: count.docs.length });
  }
  addChallenge = (id, title, image) => {
    db.collection('challenges').add({
      challengeId: id,
      email: firebase.auth().currentUser.email,
      name: title,
      image: image,
      status: 'Challenge Accepted!',
    });

    alert('Your Challenge is accepted!');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            {this.state.details.map((d) => {
              return (
                <View style={{ flex: 1 }} key={d.id}>
                  <Image
                    source={{uri:d.image}} 
                    style={{ width: '100%', height: 300 }} 
                  />
                  <TouchableOpacity
                  onPress={()=>{
                    this.props.navigation.goBack()
                  }}
                    style={{
                      position: 'absolute',
                      top: '10%',
                      left: 10,
                      backgroundColor: 'rgba(185,185,185,0.5)',
                      borderRadius: 10,
                    }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      marginTop: 20,
                    }}>
                    {d.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: 'center',
                      marginTop: 20,
                      color: 'grey',
                    }}>
                    {d.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      textAlign: 'center',
                      marginTop: 20,
                      color: 'grey',
                    }}>
                    People who Accepted the Challenge
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      marginTop: 30,
                    }}>
                    {images.map((a,i) => {
                      return (
                        <View key={i}>
                          <Image
                            style={{
                              width: 50,
                              height: 50,
                              borderRadius: 25,
                              marginHorizontal: 5,
                            }}
                            source={{ uri: a }}
                          />
                        </View>
                      );
                    })}
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        marginTop: 20,
                        color: 'grey',
                      }}>
                      +{this.state.count}{' '}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.addChallenge(d.id, d.title, d.image);
                    }}
                    style={{
                      alignSelf: 'center',
                      width: '80%',
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'purple',
                      borderRadius: 10,
                      marginTop: 50,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      Accept Challenge!
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
