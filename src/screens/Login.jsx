import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //haan boliye isme kya issue y work nhi kr rha tha acha y password hide krna h to
  //yahi bol rahin thi kya ha m to kuch or hi try kr rhi thi to hua hi nhi acha abhi to y normal hi h ispe validation vgera use krni mne try ki hui nhi
  ///aap please react ka login dekhiye iska dekhiye dono same hain hi ha vo to dekha mne fir kya issue aya
  //mne isme likha tha sb back hogya koi ni phirse hojayega haan
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
        Login
      </Text>

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
        secureTextEntry={true}
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
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            alignSelf: 'center',
            marginTop: 15,
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}>
          Create an Account?
        </Text>
      </View>
    </View>
  );
};

export default Login;
