import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Images} from '../assets';

import {TouchableOpacity} from 'react-native-gesture-handler';
//
const Card = ({title, content, navigation}) => {
  // const [imageSource, setImageSource] = useState(require('../assets/index'));

  // const changeImage = () => {
  //   setImageSource(require('../assets/index'));
  // };
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        <Image style={styles.image} source={Images.men} />
      </TouchableOpacity>
    </View>
  );
};
// export const Card1 = ({title, content, navigation}) => {
//   return (
//     <View style={styles.card}>
//       <TouchableOpacity onPress={() => navigation.navigate('Card')}>
//         <Image source={Images.men} style={styles.image} />
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 0,
    height: 350,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 380,

    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 200,
  },
});

export default Card;
