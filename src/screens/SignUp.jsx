import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          marginTop: 60,
          alignSelf: 'center',
          fontSize: 24,
          fontWeight: '600',
          color: '#000',
        }}>
        SignUp
      </Text>

      <TextInput
        placeholder="Enter Name"
        style={{
          alignSelf: 'center',
          paddingLeft: 20,
          width: '90%',
          height: 50,
          borderRadius: 10,
          marginTop: 150,
          borderWidth: 0.5,
          position: 'absolute',
        }}
      />
      <TextInput
        placeholder="Enter Email"
        style={{
          alignSelf: 'center',
          paddingLeft: 20,
          width: '90%',
          height: 50,
          borderRadius: 10,
          marginTop: 220,
          borderWidth: 0.5,
          position: 'absolute',
        }}
      />

      <TextInput
        placeholder="Enter Password"
        type="password"
        style={{
          alignSelf: 'center',
          paddingLeft: 20,
          width: '90%',
          height: 50,
          marginTop: 200,
          borderRadius: 10,
          borderWidth: 0.5,
        }}
      />
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            height: 50,
            width: '90%',
            paddingleft: 20,
            marginTop: 130,
            borderRadius: 10,
            borderWidth: 0.5,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white', alignSelf: 'center', fontSize: 30}}>
            SignUp
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              alignSelf: 'center',
              marginTop: 15,
              textDecorationLine: 'underline',
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Already have an Account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
