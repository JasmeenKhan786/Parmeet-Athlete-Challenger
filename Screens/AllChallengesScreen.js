import * as React from 'react'; 
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native'; 
import challenges from '../challenge';
import { Entypo } from '@expo/vector-icons';
//JSX

//Component LIfecycle
// 1. mounting
// 2. updating
// 3. unmounting

//functions
//states (store values inside a class)
//props (passing values between components)

//Array
//Map and ScrollView
//Flatlist
export default class AllChallenges extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 40, backgroundColor:'black' }}>
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
            Choose your Challenge
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {challenges.map((d) => {
            return (
              <TouchableOpacity
              key={d.id}
                style={{
                  width: '95%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  marginVertical: 5,
                  height: 150,
                  marginTop: 20,
                }}
                onPress={() => {
                  this.props.navigation.navigate('ChallengeDetails', {
                    selectedID: d.id,
                  });
                }}>
                <ImageBackground
                  source={{ uri: d.image }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    resizeMode: 'cover',
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      textAlign: 'center',
                      fontSize: 20,
                      color: 'white',
                      backgroundColor: 'rgba(10,10,10,0.5)',
                      padding: 5,
                    }}>
                    {d.title}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
