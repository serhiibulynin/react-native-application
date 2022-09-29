import { Box, FormControl, Input, Text } from 'native-base';
import React from 'react';

const TextField = ({ label, value, setState, name, type, placeholder }) => {
  const handleOnChangeText = (value) => {
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Box>
      <Text>{label}</Text>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        onChangeText={handleOnChangeText}
        type={type}
      />
      {/* <FormControlError errorMessageText={errorMessageText} /> */}
    </Box>
  );
};

export default TextField;
