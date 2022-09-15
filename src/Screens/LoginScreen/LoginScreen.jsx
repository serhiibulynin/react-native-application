import { Input, KeyboardAvoidingView, View } from "native-base";
import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Input value={value}></Input>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
