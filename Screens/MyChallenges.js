import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import db from "../Config"; 
import firebase from "firebase";
import { Entypo } from "@expo/vector-icons";
//JSX

//Component LIfecycle
// 1. mounting
// 2. updating
// 3. unmounting

//functions
//states (store values inside a class)
//props (passing values between components)

export default class MyChallenges extends React.Component {
  constructor() {
    super();
    this.state = {
      mychallenges: [],
    };
  } 
  getChallenges = async () => {
    var response = await db
      .collection("challenges")
      .where("email", "==", firebase.auth().currentUser.email)
      .get();
    response.docs.map((a) => {
      var temp = this.state.mychallenges;
      var data = a.data();
      data.id = a.id;
      temp.push(data);
      this.setState({ myhallenges: temp });
    });
  };
  componentDidMount() {
    this.getChallenges();
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 40, backgroundColor: "black" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: "5%",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              width: "60%",
            }}
          >
            Accepted Challenges
          </Text> 
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          >
            <Entypo name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView> 
          {this.state.mychallenges.length === 0 ? (
            <View
              style= {{ flex: 1, justifyContent: "center", alignItems: "center" , marginTop:'30%'}}>
              <Text style={{ color: "white" , fontSize:18}}>
                No Challenges Accepted Yet!
              </Text>
            </View>
          ) : (
            this.state.mychallenges.map((d) => {
              return (
                <View
                key={d.id}
                  style={{
                    width: "95%",
                    alignSelf: "center",
                    borderRadius: 20,
                    marginVertical: 5,
                    height: 150,
                    marginTop: 20,
                  }}
                >
                  <ImageBackground
                    source={{uri:d.image}}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      overflow: "hidden",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: "center",
                        fontSize: 20,
                        color: "white",
                        backgroundColor: "rgba(10,10,10,0.5)",
                        padding: 5,
                      }}
                    >
                      {d.name}
                    </Text>
                  </ImageBackground>
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    );
  }
}
