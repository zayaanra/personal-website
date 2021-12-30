/* This file includes all the things needed for the website as a whole. Each page will correspond to a separate component which will be included in 
a separate folder. */

import React from 'react';
import { View } from "react-native";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';

function App() {
  return (
    <Router>
      <View>
      <Routes>
        <Route path="/">
          <Home/>
        </Route>
      </Routes>
      </View>
    </Router>
  );
}
export default App;
