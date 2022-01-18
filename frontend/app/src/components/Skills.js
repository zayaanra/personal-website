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

const offscreen = Dimensions.get("window").width * -1;

function Skills() {
    return(
        <View>
            <TopBar></TopBar>
            <View style={{flex: 1, flexWrap: "wrap", flexDirection: "row"}}>
                <motion.div initial={{x: offscreen}} animate={{x: 0}} transition={{type: "tween", delay: 0.5}}>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/python-logo.png")}/>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/js-logo.png")}/>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/c-logo.png")}/>
                </motion.div>
                <motion.div initial={{x: offscreen}} animate={{x: 0}} transition={{type: "tween", delay: 1.0}}>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/java-logo.png")}/>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/scala-logo.png")}/>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/linux-logo.png")}/>
                </motion.div>
                <motion.div initial={{x: offscreen}} animate={{x: 0}} transition={{type: "tween", delay: 1.5}}>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/docker-logo.png")}/>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/mysql-logo.png")}/>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/mongodb-logo.png")}/>
                </motion.div>
                <motion.div initial={{x: offscreen}} animate={{x: 0}} transition={{type: "tween", delay: 2.0}}>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/git-logo.png")}/>
                    <View style={{padding: 50}}/>
                    <Image style={styles.image} source={require("../images/react-logo.png")}/>
                </motion.div>
            </View>
            </View>
    )
}

export default Skills;