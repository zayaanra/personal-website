/* This file will support a page that lists and describes the skills that I have */

import { View, StyleSheet, Text, FlatList, Dimensions, Image} from "react-native";
import React from "react";

import { motion } from "framer-motion";

import TopBar from "./TopBar";

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
    },
    left: {
        alignItems: "flex-start",
        justifyContent: "center",
    },
    middle: {
        alignItems: "center",
        justifyContent: "center",
    },
    right: {
        alignItems: "flex-end",
        justifyContent: "center",
    },
    skillName: {
        fontFamily: "Iceland",
        fontSize: 40,
        padding: 250
    },
    image: {
        width: 175,
        height: 175,
        borderRadius: 100,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "black",
        marginLeft: 100,
        marginRight: 100
    },
})

function Skills() {
    return(
        <View>
            <TopBar></TopBar>
            <View style={{flexWrap: "wrap"}}>
            <View styles={styles.left}>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/python-logo.png")}/>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/js-logo.png")}/>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/c-logo.png")}/>
            </View>
            <View style={styles.middle}>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/java-logo.png")}/>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/scala-logo.png")}/>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/linux-logo.png")}/>
            </View>
            <View style={styles.right}>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/docker-logo.png")}/>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/mysql-logo.png")}/>
                <View style={{padding: 50}}/>
                <Image style={styles.image} source={require("../images/mongodb-logo.png")}/>
            </View>
            </View>
        </View>
    )
}

export default Skills;