/* This file will support a page that lists and describes the skills that I have */

import { View, StyleSheet, Text, FlatList, Dimensions} from "react-native";
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
        padding: 250
    }
    
})

const skills = [["Python", "JavaScript", "C (language)"], ["Scala", "Java", "React-Native"], ["MySQL", "Docker", "MongoDB"], ["Linux", "Git"]]

const offscreen = Dimensions.get("window").width * -1;

function Skills() {
    return(
        <View>
            <TopBar></TopBar>
            <View style={{padding: 50}}></View>
            <FlatList horizontal={true} data={skills[0]} renderItem={({item}) =>
                <motion.div initial={{x: offscreen}} animate={{x: 25}} transition={{ type: "tween",  delay: 0.5  }}>
                    <Text style={styles.skillName}>{item}</Text>
                </motion.div>}>     
            </FlatList>
            <View style={{padding: 150}}></View>
            <FlatList horizontal={true} data={skills[1]} renderItem={({item}) =>
                <motion.div initial={{x: offscreen}} animate={{x: 25}} transition={{ type: "tween",  delay: 1.0 }}>
                    <Text style={styles.skillName}>{item}</Text>
                </motion.div>}>     
            </FlatList>
            <View style={{padding: 50}}></View>
            <FlatList horizontal={true} data={skills[2]} renderItem={({item}) =>
                <motion.div initial={{x: offscreen}} animate={{x: 25}} transition={{ type: "tween",  delay: 1.5 }}>
                    <Text style={styles.skillName}>{item}</Text>
                </motion.div>}>     
            </FlatList>
            <FlatList horizontal={true} data={skills[3]} renderItem={({item}) =>
                <motion.div initial={{x: offscreen}} animate={{x: 25}} transition={{ type: "tween",  delay: 1.5 }}>
                    <Text style={styles.skillName}>{item}</Text>
                </motion.div>}>     
            </FlatList>
        </View>
    )
}

export default Skills;