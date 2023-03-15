import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const SignIn = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      SignIn
    </TouchableWithoutFeedback>
  );
};

export { SignIn };
