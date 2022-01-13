/* This file will support a page that lists and describes the projects I have written */

import { StyleSheet, View, Image, Text, Linking, TouchableOpacity } from "react-native";
import React from "react";

import TopBar from "./TopBar";
import FadeIn from "./FadeIn";

import { motion } from "framer-motion";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontFamily: "Iceland",
        fontSize: 40,
        textDecorationLine: "underline",
    },
    desc: {
        fontFamily: "Arial",
        fontSize: 20,
    },
    link: {
        fontFamily: "Arial",
        fontSize: 20,
        textDecorationLine: "underline"
    }
})

function Projects() {
    return(
        <View style={styles.container}>
            <TopBar></TopBar>
            <FadeIn>
                <Text style={styles.name}>BULLBOARD</Text>
                <Image style={{width: 550, height: 350}} source={require("../images/bullboard.png")}/>
                <Text style={styles.desc}>This project was completed with four other team members and is an application designed to
                help students with housing.</Text>
                <Text style={styles.desc}>Users are allowed to register, login, and customize their own profiles. 
                Users can also make posts and interact on a live map with other users.</Text>
                <Text style={styles.desc}>Python was used as a back-end along with the aiohttp library and pure HTML/CSS/JavaScript was used as the front-end.</Text>
                <Text style={styles.desc}>MongoDB was used as a database to store account information.</Text>
                <TouchableOpacity onPress={() => {Linking.openURL("https://github.com/ethan-richardson/Bullboard")}}>
                    <Text style={styles.link}>https://github.com/ethan-richardson/Bullboard</Text>
                </TouchableOpacity>
            </FadeIn>
            <View style={{padding: 20}}/>
            <FadeIn>
                <Text style={styles.name}>PERSONAL WEBSITE</Text>
                <Image style={{width: 550, height: 350}} source={require("../images/temp.png")}/>
                <Text style={styles.desc}>This website was a project I completed over Winter break as a way to learn React-Native and more JavaScript.</Text>
                <Text style={styles.desc}>Specifically, I learned what React is, the differences between React and React-Native/Expo.</Text>
                <Text style={styles.desc}>In terms of building the website, I learned the importance of React hooks, components, and the various open source libraries provided for React-Native.</Text>
                <Text style={styles.desc}>I also wish to improve my knowledge of React/React-Native in the future and improve upon this website.</Text>
                <TouchableOpacity onPress={() => {Linking.openURL("https://github.com/zayaanra/personal-website")}}>
                    <Text style={styles.link}>https://github.com/zayaanra/personal-website</Text>
                </TouchableOpacity>
            </FadeIn>
            <View style={{padding: 20}}/>
            <FadeIn>
                <Text style={styles.name}>DYNAMIC MEMORY ALLOCATOR</Text>
                <Image style={{width: 550, height: 350}} source={require("../images/temp.png")}/>
                <Text style={styles.desc}>This project was completed during the course of CSE 220 (Systems Programming) in C.</Text>
                <Text style={styles.desc}>This allocator replaced standard C allocation functions such as as malloc, calloc, and realloc.</Text>
                <Text style={styles.desc}>Things I learned include how the stack and heap work and how memory is allocated.</Text>
                <Text style={styles.desc}>After completion of the project, the allocator could be used to run UNIX commands such as ls, ps aux, and large scale applications such as VIM.</Text>
                <Text style={styles.desc}>Due to UB's academic integrity policy, I am unable to provide the repository publicly. However, it is available upon request.</Text>
            </FadeIn>
        </View>
    )
}

export default Projects;