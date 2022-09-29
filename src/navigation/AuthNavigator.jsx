import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTES } from '../constants/constatnts';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      headerShown='false'
      screenOptions={{
        cardStyle: { backgroundColor: '#ffffff' },
      }}
    >
      <Stack.Screen name={ROUTES.login} component={Login} />
      <Stack.Screen name={ROUTES.registration} component={Registration} />
      <Stack.Screen name={ROUTES.home} component={Home} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
