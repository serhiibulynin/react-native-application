import { Formik } from 'formik';
import { Button, Center, Input, KeyboardAvoidingView, View } from 'native-base';
import React, { useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import TextField from '../../components/TextField/TextField';
import { ROUTES } from '../../constants/constatnts';
import { styles } from './styles';

const Login = ({ navigation }) => {
  const [state, setState] = useState({ email: '', password: '' });
  console.log('state', state);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/bg_image.jpg')}
      >
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <Center flex={1}>
                    <TextField
                      label={'Email'}
                      name={'email'}
                      value={state.email}
                      placeholder={'Enter email'}
                      setState={setState}
                      type={'text'}
                    />
                    <TextField
                      label={'password'}
                      name={'password'}
                      value={state.password}
                      placeholder={'Enter password'}
                      setState={setState}
                      type={'password'}
                    />
                    <Button onPress={() => navigation.navigate(ROUTES.home)}>
                      Sign Up
                    </Button>
                  </Center>
                );
              }}
            </Formik>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Login;
