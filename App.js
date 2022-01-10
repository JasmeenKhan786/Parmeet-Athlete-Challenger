import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation/navigate'

export default class App extends React.Component {
  render(){
  return ( 
   <NavigationContainer>   
        <MainStack/>  
   </NavigationContainer>
  ); 
  }
}


