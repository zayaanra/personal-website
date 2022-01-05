/* This file will support a page that lists and describes the courses I have taken */

import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import { motion } from "framer-motion"

import TopBar from "./TopBar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    courseName: {
        fontFamily: "Iceland",
        fontSize: 40,
        fontStyle: "italic",
        textDecorationLine: "underline",
    },
    courseDesc: {
        fontFamily: "Arial",
        fontSize: 15,
    },
    left: {
        paddingLeft: 75
        //alignItems: "center",
        //justifyContent: "center",
    },
    button: {
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "white",
        width: 150,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
    }
})

const courses = ["CSE 115", "CSE 116", "CSE 191", "CSE 220", "CSE 250", "CSE 341", "CSE 312"]

const Button = ({item}) => {
    return (
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.courseDesc}>{item}</Text>
          </View>
        </TouchableOpacity>
    )
}



function Courses() {
    return(
        <View styles={styles.container}>
            <TopBar></TopBar>
            <View style={{padding: 40}}></View>
            <View style={styles.left}>
                <FlatList data={courses} renderItem={({item}) => 
                 <motion.div initial={{x: '-25vw'}} animate={{x: 0}} transition={{ type: "spring", bounce: 0.5}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.courseName}>{item}</Text>
                    </TouchableOpacity>
                    </motion.div>}>
                </FlatList>
                
            </View>
        </View>
    )
}

export default Courses;