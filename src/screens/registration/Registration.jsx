import { Formik } from 'formik';
import { Button, Center, Input, KeyboardAvoidingView, View } from 'native-base';
import React, { useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { auth } from '../../../config';
import TextField from '../../components/TextField/TextField';
import { ROUTES } from '../../constants/constatnts';
import { styles } from './styles';

const Registration = ({ navigation }) => {
  const [state, setState] = useState({ email: '', password: '', nickname: '' });
  console.log('state', state);

  const submitForm = () => {
    const registerDB = async () => {
      try {
        await auth.createUserWithEmailAndPassword(emai, passwor);
      } catch (error) {
        throw error;
      }
    };
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/bg_image.jpg')}
      >
        {/* <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
        <Formik
          initialValues={{
            nickname: '',
            email: '',
            password: '',
          }}
          onSubmit={submitForm}
        >
          {({ handleSubmit }) => {
            return (
              <Center flex={1}>
                <TextField
                  label={'nickname'}
                  name={'nickname'}
                  value={state.nickname}
                  placeholder={'Enter nickname'}
                  setState={setState}
                  type={'text'}
                />
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

                <Button onPress={handleSubmit}>Sign Up</Button>
                <Button onPress={() => navigation.navigate(ROUTES.login)}>
                  Sign In
                </Button>
              </Center>
            );
          }}
        </Formik>
        {/* </KeyboardAvoidingView>
        </View> */}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Registration;
