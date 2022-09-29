import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import BottomTabNavigator from '../../navigation/BottomTabNavigator/BottomTabNavigator';

const Home = () => {
  return <BottomTabNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
