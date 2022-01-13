/* This file will support a page that lists and describes the projects I have written */

import { StyleSheet, View, Image, Text, } from "react-native";
import React from "react";

import TopBar from "./TopBar";
import FadeIn from "./FadeIn";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        fontFamily: "Iceland",
        fontSize: 40,
        textDecorationLine: "underline",
    }
})

function Projects() {
    return(
        <View style={styles.container}>
            <TopBar></TopBar>
            <FadeIn>
                <Text style={styles.name}>BULLBOARD</Text>
            </FadeIn>
        </View>
    )
}

export default Projects;