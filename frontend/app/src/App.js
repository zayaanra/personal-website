/* This file includes all the things needed for the website as a whole. Each page will correspond to a separate component which will be included in 
a separate folder. */

import React from 'react';
import { View } from "react-native";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Courses from './components/Courses';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <Router>
      <View>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
      </View>
    </Router>
  );
}
export default App;
