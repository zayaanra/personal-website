/* This file is used for the navigation bar at the top. */

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from "react-native";

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
    borderWidth: 1,
    borderBottomColor: "black",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "white",
    //borderWidth: 1,
    //borderStyle: "solid",
    //borderColor: "black",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#278021",
    fontFamily: "Iceland"
  }
});

function TopBar() {
  let nav = useNavigate();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={nav("/home")}>
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
      <TouchableOpacity onPress={() => {nav("/education")}}>
        <View style={styles.button}>
          <Text style={styles.text}>EDUCATION</Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {nav("/projects")}}>
        <View style={styles.button}>
          <Text style={styles.text}>PROJECTS</Text>
         </View>
       </TouchableOpacity>
    </View>
  );
}
  
export default TopBar;
  