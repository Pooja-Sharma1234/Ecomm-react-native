import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {CategoryDetails} from '../screens/categoryDetails';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
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
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
    </Stack.Navigator>
  );
};

const BottomTabBar = () => {
  //bana ligiyega
};

export const Router = () => {
  const isLoggedIn = false;
  //aur jab bhi apko Auth pr kaam krna hoga jayese login an
  //ab age kariye ok y upr login homescreen likha ku aane lga
  //hua

  return (
    <NavigationContainer>
      {isLoggedIn ? AppStack() : AuthStack()}
    </NavigationContainer>
  );
};
