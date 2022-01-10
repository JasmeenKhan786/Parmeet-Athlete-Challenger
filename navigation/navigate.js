import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from '../Screens/loginScreen';
import SignUp from '../Screens/SignUpScreen';
import Dashboard from '../Screens/Dashboard'; 
import LoadingScreen from '../Screens/LoadingScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import AllChallenges from '../Screens/AllChallengesScreen';
import AllEvents from '../Screens/AllEvents';
import ChallengeDetails from '../Screens/ChallengeDetails';
import MyChallenges from '../Screens/MyChallenges';
import ParticularEvents from '../Screens/ParticularEvents';
import ZeroToPro from '../Screens/ZeroToPro';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';

const Stack1 = createStackNavigator();

const ChallengeStack = () => {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false }}>
      <Stack1.Screen name="AllChallenges" component={AllChallenges} />
      <Stack1.Screen name="ChallengeDetails" component={ChallengeDetails} />
    </Stack1.Navigator>
  );
};



const Tab = createMaterialBottomTabNavigator();

const ChallengeTab = () => { 
  return (
    <Tab.Navigator   
  activeColor="#f0edf6"
  inactiveColor="#f0edf6"      
  labeled={true} 
  barStyle={{ backgroundColor: '#42378f' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => { 
          let iconName;
 
          if (route.name === 'AllChallenges') {
           return  <MaterialCommunityIcons name="arm-flex" size={24} color="white" />
          } else if (route.name === 'MyChallenges') {
          return   <Entypo name="sports-club" size={24} color="white" />
          } 

        } })}>
      <Tab.Screen name="AllChallenges" component={ChallengeStack} />
      <Tab.Screen name="MyChallenges" component={MyChallenges} />
    </Tab.Navigator>
  );
};

const Tab1 = createMaterialBottomTabNavigator();
 
const EventTab = () => {
  return (
    <Tab1.Navigator    
     initialRouteName="AllEvents" 
  activeColor="#f0edf6"  
  inactiveColor="#f0edf6" 
  labeled={true}
  barStyle={{ backgroundColor: '#42378f' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'AllEvents') {
         return <FontAwesome5 name="basketball-ball" size={24} color="white" />
             
          } else if (route.name === 'MyEvents') {
         return <FontAwesome5 name="basketball-ball" size={24} color="white" />
          
          } 

        } })}>
      <Tab1.Screen name="AllEvents" component={AllEvents} />
      <Tab1.Screen name="MyEvents" component={ParticularEvents} />
    </Tab1.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerContent = () => {
  return (
    <Drawer.Navigator screenOptions = {{headerShown:false}}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="AllChallenges" component={ChallengeTab} />
      <Drawer.Screen name="AllEvents" component={EventTab} />
      <Drawer.Screen name="ZeroToPro" component={ZeroToPro} />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DrawerContent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

