/* This file is used for the navigation bar at the top. */

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from "react-native";
import { motion } from "framer-motion";


import { useNavigate } from "react-router-dom";
  
const windowWidth = Dimensions.get("window").width;
  
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    width: windowWidth,
    height: 65,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 3,
    borderBottomColor: "black",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "blue",
    fontFamily: "Iceland"
  }
});

function TopBar() {
  let nav = useNavigate();

  return (
    <motion.div initial={{y: '-25vw'}} animate={{y: 0}} transition={{ type: "spring", bounce: 0.5}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {nav("/home")}}>
          <View style={styles.button}>
            <Text style={styles.text}>HOME</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {nav("/courses")}}>
          <View style={styles.button}>
            <Text style={styles.text}>COURSES</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {nav("/skills")}}>
          <View style={styles.button}>
            <Text style={styles.text}>SKILLS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {nav("/projects")}}>
          <View style={styles.button}>
            <Text style={styles.text}>PROJECTS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </motion.div>
  );
}
  
export default TopBar;
  