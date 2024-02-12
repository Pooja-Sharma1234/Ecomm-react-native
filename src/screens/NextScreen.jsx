import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Card from './Card';
import Card1 from './Card';
import {Images} from '../assets';

export const NextScreen = ({route}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // padding: 0,
        }}></View>
      <View>
        <View style={styles.Card}>
          <Image source={Images.men} style={styles.image} />

          <View
            style={{
              flexDirection: 'row',
              padding: 25,
              justifyContent: 'space-between',
            }}>
            <Icon name="menu" size={30} color="white" />
            <Text style={{fontSize: 30, color: '#935'}}>Men</Text>
            <Icons name="heart-outlined" size={30} color="white" />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                alignItems: 'flex-start',
                marginTop: 40,
              }}>
              <View style={styles.size}>
                <Text style={{color: 'white', backgroundColor: 'red'}}></Text>
              </View>
              <View style={styles.size}>
                <Text style={{color: 'white'}}></Text>
              </View>
              <View style={styles.size}>
                <Text style={{color: 'white'}}></Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                marginTop: 40,
              }}>
              <View style={styles.size}>
                <Text style={{color: 'white'}}>L</Text>
              </View>
              <View style={styles.size}>
                <Text style={{color: 'white'}}>M</Text>
              </View>
              <View style={styles.size}>
                <Text style={{color: 'white'}}>N</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 70}}>
            <Text style={{color: 'white', fontSize: 20}}>Casual Jeans</Text>
            <Text style={{color: 'white', fontSize: 20}}>$450</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          modi! Fugit.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',

            padding: '50',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Icons name="dots-three-horizontal" size={40} color="black" />
        </View>
        <View
          style={{
            flexDirection: 'row',

            padding: 15,
          }}>
          <View style={styles.circle}>
            <Icon name="arrow-back" size={30} color="#900" />
          </View>
          <View style={styles.circle}>
            <Icon name="arrow-forward" size={30} color="#900" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 0,
    height: 500,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 40,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  size: {
    width: 40,
    height: 40,
    margin: 3,
    color: 'white',
    borderRadius: 30,
    opacity: 2,
    borderWidth: 2,
    borderColor: 'grey',

    justifyContent: 'center',
    alignItems: 'center',
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
  image: {
    width: '100%',
    height: 500,
    position: 'absolute',
    resizeMode: 'cover',
  },
});
