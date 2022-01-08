import { StyleSheet, View, Image, Text, } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    courseDesc: {
        fontFamily: "Arial",
        fontSize: 40,
    },
})

function CourseDesc(name) {
    if (name === "CSE 115") {
        return (
            <Text style={styles.courseDesc}>In this course...</Text>
        )
    } else {
        return (
            <Text style={styles.courseDesc}>Want to learn about one of these courses? Click on them to reveal a description!</Text>
        )
    }
}

export default CourseDesc;