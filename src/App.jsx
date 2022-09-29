import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, Box } from 'native-base';
import Login from './screens/login/Login';
import Registration from './screens/registration/Registration';
import Home from './screens/home/Home';
import { ROUTES } from './constants/constatnts';

const AuthStack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer initialRouteName={ROUTES.home}>
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name={ROUTES.login} component={Login} />
            <AuthStack.Screen name={ROUTES.registration} component={Registration} />
            <AuthStack.Screen name={ROUTES.home} component={Home} />
          </AuthStack.Navigator>
        </NavigationContainer>
        {/* <Login /> */}
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};
export default registerRootComponent(App);
