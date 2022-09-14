import React from "react";
import { registerRootComponent } from "expo";
import { NativeBaseProvider, Box } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
};
export default registerRootComponent(App);
