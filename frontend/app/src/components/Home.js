/* This file will support the component for the homepage. It'll include a navbar, an image, and an About Me. */

import { StyleSheet, View, Image, Text, Animated, Dimensions } from "react-native";
import React, { useRef } from 'react';

import { motion, AnimationProps } from "framer-motion";

import TopBar from "./TopBar";
import Links from "./Links";

/* https://reactnative.dev/docs/animations */
const Fader = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
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
        width: 300,
        height: 300,
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

const path = {
        transition: {
        duration: 4, //Change this to either slow or hasten the animation
        ease: "easeInOut",
    },
    variants: {
        visible: {
            pathLength: 1, //Change this to determine how much of the path is drawn when first rendered
    },
    hidden: {
        pathLength: 0,
        },
    },
};

const pathColor = "black";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const vb = `0 0 ${windowWidth} ${windowHeight}`

function Home() {
    return (
        <View style={styles.container}>
            <motion.div initial={{y: '-25vw'}} animate={{y: 0}} transition={{ type: "spring", bounce: 0.5}}>
            <TopBar></TopBar>
            </motion.div>
            <View style={{paddingVertical: 50}}></View>
                <Fader>
                    <Image
                        style={styles.image}
                        source={{
                        uri: 'https://s3-us-west-1.amazonaws.com/co-directory-images/afm-rahman-84141221.jpg',
                        }}
                    /> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox={vb}>
                <g transform="translate(500 100)">
                    <motion.path
                        {...path}
                        animate="visible"
                        initial="hidden"
                        //d="M154.159,159.064c14.534,0,29.069.063,43.6-.046a12.556,12.556,0,0,1,8.923,2.922c9.926,8.437,19.947,16.771,30.149,24.871,3.719,2.953,3.852,4.888.247,8.109q-39.8,35.564-79.3,71.45c-2.775,2.517-4.694,2.734-7.563.133q-39.827-36.089-79.879-71.929c-3.5-3.129-2.766-5.007.459-7.6q15.512-12.493,30.711-25.372c2.788-2.375,5.741-2.609,9.048-2.6,14.534.054,29.069.024,43.6.024Z"
                        d="M 400 300 L 550 300 L 400 450 L 550 450 "
                        fill="none"
                        stroke={pathColor}
                        //stroke-miterlimit="10"
                        strokeWidth="3"
                    />
                </g>
            </svg>
                    {/* <Text style = {styles.name}> ZAYAAN RAHMAN </Text> */ }
                    <View style={{paddingVertical: 10}}></View>
                    <Text style = {styles.description}>I am a Computer Science student studying at SUNY University at Buffalo currently in my third year.</Text>
                    <Text style = {styles.description}>Currently, I am interested in cybersecurity, web development, and how important those are in the modern world.</Text>
                    <Text style = {styles.description}>It was only until recently where I realized that I wanted to learn cybersecurity and web development, up until then, I had no idea what part of Computer Science I wanted to be apart of.</Text>
                    <Text style = {styles.description}>With the world we live, security threats are more important than ever and I wish to improve my understanding and help make the world a safer place.</Text>
                </Fader>
                <View style={{paddingVertical: 30}}></View>
            <Links></Links>
        </View>
    );
}

export default Home;