/* This file includes all the things needed for the website as a whole. Each page will correspond to a separate component which will be included in 
a separate folder. */

import Home from './components/Home';
import React from 'react';
import { View } from "react-native";

function App() {
  return (
    <View>
      <Home></Home>
    </View>
  );
}

export default App;
