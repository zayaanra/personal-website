/* This file will support a page that lists and describes the skills that I have */

import { View, StyleSheet, Text, FlatList } from "react-native";
import React from "react";

import { motion } from "framer-motion";

import TopBar from "./TopBar";

const styles = StyleSheet.create({
    column1: {
        flexDirection: "column"
    },
    column2: {

    },
    column2: {

    },
    skillName: {
        fontFamily: "Iceland",
        fontSize: 40,
        paddingLeft: 20
    }
    
})

function Skills() {
    return(
        <View>
            <TopBar></TopBar>
            <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 0 }}>
                    <Text style={styles.skillName}>PYTHON</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 0.5 }}>
                    <Text style={styles.skillName}>JAVASCRIPT</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 1 }}>
                    <Text style={styles.skillName}>DOCKER</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 1.5 }}>
                    <Text style={styles.skillName}>MYSQL</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 2.0 }}>
                    <Text style={styles.skillName}>LINUX</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 2.5}}>
                    <Text style={styles.skillName}>GIT</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 3.0 }}>
                    <Text style={styles.skillName}>MONGODB</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 3.5 }}>
                    <Text style={styles.skillName}>C (LANGUAGE)</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 4.0 }}>
                    <Text style={styles.skillName}>SCALA</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 4.5 }}>
                    <Text style={styles.skillName}>JAVA</Text>
                </motion.div>
                <View style={{padding: 150}}></View>
                <motion.div initial={{y: '100vw'}} animate={{y: 50}} transition={{ type: "tween", delay: 5.0 }}>
                    <Text style={styles.skillName}>REACT-NATIVE</Text>
                </motion.div>
            </View>
        </View>
    )
}

export default Skills;