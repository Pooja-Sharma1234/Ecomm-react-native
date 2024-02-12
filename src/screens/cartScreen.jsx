import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export const CartScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          backgroundColor: 'red',
        }}>
        <Text style={{fontSize: 20}}>Cart</Text>
      </View>
    </View>
  );
};
