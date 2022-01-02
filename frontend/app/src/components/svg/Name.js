import { StyleSheet, View, Image, Text, Animated, Dimensions } from "react-native";
import React, { useRef } from 'react';

import { motion } from "framer-motion";

const pathColor = "black";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const vb = `0 0 ${windowWidth} ${windowHeight}`

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

const styles = StyleSheet.create({
    box: {
        width: 150,
        height: 150,
        backgroundColor: "purple",
        borderRadius: 30
    }
})

//letters are 2 boxes wide, 3 boxes tall
function Name() {
    return(
        <motion.div animate={{scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0], borderRadius: ["20%", "20%", "50%", "50%", "20%"]}}   
        transition={{
         duration: 2,
         ease: "easeInOut",
         times: [0, 0.2, 0.5, 0.8, 1],
         repeat: Infinity,
         repeatDelay: 1
       }}>
        <View style={styles.box}>
        </View>
        </motion.div>
    )
}

export default Name;

