import {
  Alert,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {categories} from '../mockdata';
import {Images} from '../assets';
export const HomeScreen = ({navigation}) => {
  const categoryHandler = val => {
    navigation.navigate('category', {title: val});
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 25,
          borderRadius: 15,
          backgroundColor: 'white',
        }}>
        <Icon name="menu" size={30} color="#900" />
        <Text style={{fontSize: 20}}>category</Text>
        <Icon name="search" size={30} color="#900" />
      </View>
      {categories.map(item => {
        return (
          <TouchableOpacity
            onPress={() => categoryHandler(item.title)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 1,
              backgroundColor: 'white',
              elevation: 2,
              padding: 20,
            }}>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.no_of_items} items</Text>
            </View>

            <Image source={Images.user} style={{height: 100, width: 200}} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
