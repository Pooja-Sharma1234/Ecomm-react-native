import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {CategoryDetails} from '../screens/categoryDetails';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import {useSelector} from 'react-redux';
import {NextScreen} from '../screens/NextScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="category" component={CategoryDetails} />
      <Stack.Screen name="Card" component={NextScreen} />
    </Stack.Navigator> //name galat h hello yeah navigate kaha se ho rah ahain
  );
}; //kya hua yha nextscreen dalu na haan

const BottomTabBar = () => {
  //bana ligiyega ab kariye y niche ka gya kya haan dele ho gayin thinhm ok usko kl karenge acha y categorydetail m arrow p click kre to card image change honi chhaiye haan nahikya
}; //ha toh y krna h  kha gye yahi hun scroll hoti h na vse

export const Router = () => {
  const {isLoggedIn} = useSelector(state => state.auth);

  //aur jab bhi apko Auth pr kaam krna hoga jayese login an
  //ab age kariye ok y upr login homescreen likha ku aane lga
  //hua hmm ab try kariye

  return (
    <NavigationContainer>
      {isLoggedIn ? AppStack() : AuthStack()}
    </NavigationContainer>
  );
};
