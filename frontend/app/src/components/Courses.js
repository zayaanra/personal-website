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
        fontSize: 40,
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
    },
})

const courses = [
    {
        id: 1,
        data: "CSE 115",
    },
    {
        id: 2,
        data: "CSE 116",
    },
    {
        id: 3,
        data: "CSE 191",
    },
    {
        id: 4,
        data: "CSE 220",
    },
    {
        id: 5,
        data: "CSE 250",
    },
    {
        id: 6,
        data: "CSE 341",
    },
    {
        id: 7,
        data: "CSE 312"
    }
]

function Description(item) {
    if (item === "CSE 115") {
        return (
            <Text style={styles.courseDesc}>In this course...</Text>
        )
    } else {
        return (
            <Text style={styles.courseDesc}>Want to learn about one of these courses? Click on them to reveal a description!</Text>
        )
    }

}



function Courses() {
    return(
        <View styles={styles.container}>
            <TopBar></TopBar>
            <View style={{padding: 40}}></View>
            <View style={styles.left}>
                <FlatList data={courses} renderItem={({item}) => 
                    <motion.div initial={{x: '-25vw'}} animate={{x: 0}} transition={{ type: "spring", bounce: 0.5}}>
                        <TouchableOpacity onPress={() => Description(item)} style={styles.button}>
                            <Text style={styles.courseName}>{item}</Text>
                        </TouchableOpacity>
                    </motion.div>}>
                </FlatList>
            </View>
            <Description></Description>
        </View>
    )
}

export default Courses;