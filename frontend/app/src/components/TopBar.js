/* This file is used for the navigation bar at the top. */

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from "react-native";
  
const windowWidth = Dimensions.get("window").width;
  
const styles = StyleSheet.create({
  // TODO - First and last button too close to edge
  container: {
    alignSelf: "stretch",
    width: windowWidth,
    height: 65,
    backgroundColor: "white",
    color: "red",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderBottomColor: "black"
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
    color: "lightskyblue",
    fontFamily: "Iceland"
  }
});
  
function TopBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>HOME</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>COURSES</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>SKILLS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>EDUCATION</Text>
         </View>
       </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>PROJECTS</Text>
         </View>
       </TouchableOpacity>
    </View>
  );
}
  
export default TopBar;
  