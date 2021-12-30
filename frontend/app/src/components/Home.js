/* This file will support the component for the homepage. It'll include a navbar, an image, and an About Me. */

import { StyleSheet, View, Image, Text, Animated } from "react-native";
import React, { useRef } from 'react';

import TopBar from "./TopBar";
import Links from "./Links";

const Fader = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current //opacity is initially 0
    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
            toValue: 1,
            duration: 2500,
            }
        ).start();
    }, [fadeAnim])
    return (
        <Animated.View
          style={{
                ...props.style,
              opacity: fadeAnim,
              alignItems: "center",
              justifyContent: "center",
         }}
     >
            {props.children}
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "aliceblue",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 500,
        height: 500,
        borderRadius: 500,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "black"
    },
    name: {
        fontFamily: "Iceland",
        fontSize: 50,
        color: "black",
    },
    description: {
        fontFamily: "Iceland",
        fontSize: 20,
        color: "black",
        padding: 10
    },
})


function Home() {
    return (
        <View style={styles.container}>
            <TopBar></TopBar>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://s3-us-west-1.amazonaws.com/co-directory-images/afm-rahman-84141221.jpg',
                }}
            /> 
            <Fader>
                <Text style = {styles.name}> Zayaan Rahman </Text>
                <Text style = {styles.description}>I am a Computer Science student studying at SUNY University at Buffalo currently in my third year.</Text>
                <Text style = {styles.description}>Currently, I am interested in cybersecurity, web development, and how important those are in the modern world.</Text>
                <Text style = {styles.description}>It was only until recently where I realized that I wanted to learn cybersecurity and web development, up until then, I had no idea what part of Computer Science I wanted to be apart of.</Text>
                <Text style = {styles.description}>With the world we live, security threats are more important than ever and I wish to improve my understanding and help make the world a safer place.</Text>
            </Fader>
            <Links></Links>
        </View>
    );
}

export default Home;