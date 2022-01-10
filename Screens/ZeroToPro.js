import * as React from 'react';
import {
  Text,
  View,  
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


//JSX

//Component LIfecycle
// 1. mounting
// 2. updating
// 3. unmounting

//functions
//states (store values inside a class)
//props (passing values between components)
const data = [
  { 
    time: 'Step 0',
    title: 'Get a basketball', 
    description: 'Get a basketball and start dribbling', 
    image: require('../assets/basketball.png'),
  },
  {
    time: 'Step 1',
    title: 'Dribbling',
    description: 'Dribble with one hand until it is comfortable',
    image: require('../assets/dribble.png'),
  },
  {
    time: 'Step 2',
    title: 'Dribbling 2',
    description: 'Once comfortable do the same with your other hand',
    image: require('../assets/dribble2.png'),
  },
  {
    time: 'Step 3',
    title: 'Layup',
    description:
      'Get a basketball hoop and practice doing basic left and right hand layups',
    image: require('../assets/layup.png'),
  },
  {
    time: 'step 4',
    title: 'Intermediate dribbling',
    description:
      'try bouncing the ball from one hand to the other. This is called a crossover and is a really useful move. Practice this until you are able to do it quickly and efficiently',
    image: require('../assets/dribble3.png'),
  },
  {
    time: 'step 5',
    title: 'Shooting 1',
    description:
      'Practice making shots that are in the paint until you are confident that you will make majority of your shots.',
    image: require('../assets/shooting.png'),
  },
  {
    time: 'step 6',
    title: 'shooting 2',
    description:
      'then try shooting the ball from outside the paint but still within the three-point line. Keep doing so until you are confident that you are going to make majority of your shots in the area.',
    image: require('../assets/shooting2.png'),
  },
  {
    time: 'step 7',
    title: 'put it all together',
    description: 'Take all the skills that you just learned and apply them into a real game.',
    image: require('../assets/dunk.png'),
  },
  {
    time: 'step 8',
    title: 'Enjoy!!!'
  }
];
export default class ZeroToPro extends React.Component {
  constructor() {
    super();
    this.renderDetail = this.renderDetail.bind(this);
  }
  renderDetail(rowData, sectionID, rowID) {
    let title = (
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>
        {rowData.title}
      </Text>
    );
    var desc = null;
    if (rowData.description && rowData.image)
      desc = (
        <View style={{ flex: 1 }}>
          <Image source={rowData.image} style={{ width: 200, height: 300 }} />
          <Text style={{ marginVertical: 10 }}>{rowData.description}</Text>
        </View>
      );

    return (
      <View style={{ flex: 1 }}>
      
        {title}
        {desc}
      </View>
    );
  }

  render() {
    return (
      
      <View style={{ flex: 1, backgroundColor: 'white' }}>
       <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
            paddingHorizontal: '5%',
            paddingTop:'10%',
            backgroundColor:'#42378f',
            paddingBottom:10
          }}>
            
         <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: 'white',
              width: '60%',
              
            }}>
            Zero to Pro
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
          </View>
        <ScrollView style={{
marginTop:20
        }}>
          <Timeline
            style={{ flex: 1 }}
            data={data}
            circleSize={20}  
            circleColor="rgba(0,0,0,0)"
            lineColor="black"
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{
              textAlign: 'center',
              backgroundColor: 'black',
              color: 'white',
              padding: 5,
              borderRadius: 13,
              marginTop:20
            }}
            descriptionStyle={{ color: 'grey' }}
            options={{
              style: { paddingTop: 5 },
            }}
            innerCircle={'icon'}
            onEventPress={this.onEventPress}
            renderDetail={this.renderDetail}
          />
        </ScrollView>
      </View>
    );
  }
}
