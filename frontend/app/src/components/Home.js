/* This file will support the component for the homepage. It'll include a navbar, an image, and an About Me. */

import { StyleSheet, View, Image, Text, } from "react-native";
import React from 'react';

import { motion } from "framer-motion";

import TopBar from "./TopBar";
import Links from "./Links";
import FadeIn from "./FadeIn";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "aliceblue",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 500,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "white"
    },
    name: {
        fontFamily: "Iceland",
        fontSize: 50,
        color: "black",
    },
    description: {
        fontFamily: "Arial",
        fontSize: 20,
        color: "black",
        padding: 10
    },
})


function Home() {
    return (
        <View style={styles.container}>
            <TopBar></TopBar>
            <View style={{paddingVertical: 50}}></View>
                <FadeIn>
                    <Image style={styles.image} source={require("../images/me.jpg")}/> 
                    <Text style = {styles.name}> ZAYAAN RAHMAN </Text>
                    <View style={{paddingVertical: 10}}></View>
                    <Text style = {styles.description}>I am a Computer Science student studying at SUNY University at Buffalo currently in my third year.</Text>
                    <Text style = {styles.description}>Currently, I am interested in cybersecurity, web development, and how important those are in the modern world.</Text>
                    <Text>Test</Text>
                    <Text style = {styles.description}>With the world we live, security threats are more important than ever and I wish to improve my understanding and help make the world a safer place.</Text>
                    <View style={{paddingVertical: 30}}></View>
                    <motion.div initial={{y: '25vw'}} animate={{y: 0}} transition={{ type: "spring", bounce: 0.5}}>
                        <Links/>   
                    </motion.div>
                </FadeIn>
                <View style={{paddingVertical: 30}}></View>
        </View>

    );
}

export default Home;