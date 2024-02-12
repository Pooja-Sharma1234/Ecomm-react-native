/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import 'react-native-gesture-handler';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  Button,
  TextInput,
} from 'react-native';
import {Router} from './routers/Router';

/* 

step 1
setup proper folder struture
step 2
use proper navigation
step 3
use redux
step 4
stacks,drawer,tabbar,ap kariye

*/
//ap age karo
//ho gaya na setup ab tutant chnage dihegaacha
//haan bataye kya krna tha hame aap btao k okha se suru krna h
//samjh ayay ki react aur react native jada anter nahi hain naha almost kuch kuch alag h bs haan
function App() {
  //  vo code kha gya woh expo tha yeah cli jitne bhi ap bante hain issue use krte hain acha
  //yesh keasa androis emulator hain na sir na paon mtlb  ok jo ab tak mne kiya vse hi hoga isme bhi haaan ok

  return <Router />;
}

//styleing ayse krte hain
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'green',
    borderRadius: 10,
    margin: 50,
    marginLeft: 220,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'midnightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inputBox: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
