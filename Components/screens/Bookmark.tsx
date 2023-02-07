import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Bookmark')}>This is Book mark </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default User;
