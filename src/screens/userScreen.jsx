import {View, Text, StyleSheet} from 'react-native';
export const UserScreen = () => {
  return (
    <View>
      <Text style={styles.text}>UserDetails</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'red',
  },
});
