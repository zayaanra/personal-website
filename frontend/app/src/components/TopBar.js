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
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "lightskyblue"
  }
});
  
function TopBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Courses</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Skills</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Education</Text>
         </View>
       </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Projects</Text>
         </View>
       </TouchableOpacity>
      <TouchableOpacity>
         <View style={styles.button}>
          <Text style={styles.text}>Contact</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
  
export default TopBar;
  