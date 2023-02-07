import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const User = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Discover')}>This is Discover </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default User;
