import { StyleSheet, View, Image, Text, Animated, Dimensions } from "react-native";
import React, { useRef } from 'react';

import { motion, AnimationProps } from "framer-motion";

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

//letters are 2 boxes wide, 3 boxes tall
function Name() {
    return(
        <View>
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox={vb}>
                <g transform="translate(-100 -700)"> 
                    <motion.path
                        {...path}
                        animate="visible"
                        initial="hidden"
                        //d="M154.159,159.064c14.534,0,29.069.063,43.6-.046a12.556,12.556,0,0,1,8.923,2.922c9.926,8.437,19.947,16.771,30.149,24.871,3.719,2.953,3.852,4.888.247,8.109q-39.8,35.564-79.3,71.45c-2.775,2.517-4.694,2.734-7.563.133q-39.827-36.089-79.879-71.929c-3.5-3.129-2.766-5.007.459-7.6q15.512-12.493,30.711-25.372c2.788-2.375,5.741-2.609,9.048-2.6,14.534.054,29.069.024,43.6.024Z"
                        d="M 250 250 L 350 250 L 250 400 L 350 400 "
                        fill="none"
                        stroke={pathColor}
                        //stroke-miterlimit="10"
                        strokeWidth="6"
                    />
                </g>
                <g transform="translate(400 -500)">
                    <motion.path
                        {...path}
                        animate="visible"
                        initial="hidden"
                        //d="M154.159,159.064c14.534,0,29.069.063,43.6-.046a12.556,12.556,0,0,1,8.923,2.922c9.926,8.437,19.947,16.771,30.149,24.871,3.719,2.953,3.852,4.888.247,8.109q-39.8,35.564-79.3,71.45c-2.775,2.517-4.694,2.734-7.563.133q-39.827-36.089-79.879-71.929c-3.5-3.129-2.766-5.007.459-7.6q15.512-12.493,30.711-25.372c2.788-2.375,5.741-2.609,9.048-2.6,14.534.054,29.069.024,43.6.024Z"
                        d="M 250 250 L 300 100 L 350 250 L 335 200 L 265 200 "
                        fill="none"
                        stroke={pathColor}
                        //stroke-miterlimit="10"
                        strokeWidth="6"
                    />
                </g>
            </svg>
        </View>
    )
}

export default Name;

