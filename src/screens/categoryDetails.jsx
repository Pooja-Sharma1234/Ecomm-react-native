import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Card from './Card';
import Card1 from './Card';
import {Images} from '../assets';
import {useState} from 'react';

// import Icon from 'react-native-vector-icons/AntDesign';
export const CategoryDetails = ({navigation, route}) => {
  const {title} = route.params;
  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      {/* <TouchableOpacity onPress={backHandler}>
        <Text>Back</Text>
      </TouchableOpacity> */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <Icon name="menu" size={30} color="#900" />
        <Text style={{fontSize: 20}}>{title}</Text>
        <Icon name="search" size={30} color="#900" />
      </View>
      <View>
        <Card navigation={navigation} />
      </View>
      {/* <Image source={Images.Men} style={{height: 100, width: 200}} /> */}
      <View>
        <Text style={styles.text}>Casual Jeans</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          modi! Fugit.
        </Text>
      </View>
      <View style={{flexGrow: 1, marginTop: 50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',

              // backgroundColor: 'green',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Icons name="dots-three-horizontal" size={40} color="black" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'blue',

              // justifyContent: 'space-between',
              padding: 15,
            }}>
            <TouchableOpacity onPress={backHandler} style={styles.circle}>
              <Icon name="arrow-back" size={30} color="#900" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <Icon name="arrow-forward" size={30} color="#900" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#900',
  },
});
