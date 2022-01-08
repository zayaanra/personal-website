/* This file will support a page that lists and describes the courses I have taken */

import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { motion } from "framer-motion"

import TopBar from "./TopBar";
import CourseDesc from "./CourseDesc";
import FadeIn from "./FadeIn";
import FadeOut from "./FadeOut";

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
    console.log(item)
    if (item === "CSE 115") {
        return (
            <Text style={styles.courseDesc}>In this course...</Text>
        )
    } else if(item === "First Render"){
        return (
            <Text style={styles.courseDesc}>Want to learn about one of these courses? Click on them to reveal a description!</Text>
        )
    }

}

let state = {visible: true}



function Courses() {
    const [active, setActive] = useState("FirstRender");
    return(
        <View styles={styles.container}>
            <TopBar></TopBar>
            <View style={{padding: 40}}></View>
            <View style={styles.left}>
                <FlatList data={courses} renderItem={({item}) => 
                    <motion.div initial={{x: '-25vw'}} animate={{x: 0}} transition={{ type: "spring", bounce: 0.5}}>
                        <TouchableOpacity onPress={() => {setActive(item.data)}} style={styles.button}>
                            <Text style={styles.courseName}>{item.data}</Text>
                        </TouchableOpacity>
                    </motion.div>}>
                </FlatList>
            </View>
            {active === "First Render" && <Text>First Render</Text>}
            {active === "CSE 115" && <FadeIn><Text>CSE 115 was about...</Text></FadeIn>}
            {active === "CSE 116" && <FadeIn><Text>CSE 116 was about...</Text></FadeIn>}
            {active === "CSE 191" && <FadeIn><Text>CSE 191 was about...</Text></FadeIn>}
            {active === "CSE 220" && <FadeIn><Text>CSE 220 was about...</Text></FadeIn>}
            {active === "CSE 250" && <FadeIn><Text>CSE 250 was about...</Text></FadeIn>}
            {active === "CSE 341" && <FadeIn><Text>CSE 341 was about...</Text></FadeIn>}
            {active === "CSE 312" && <FadeIn><Text>CSE 312 was about...</Text></FadeIn>}
        </View>
    )
}

export default Courses;