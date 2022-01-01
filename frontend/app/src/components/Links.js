import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from "react-native";

import { motion } from "framer-motion";

const styles = StyleSheet.create({
    linksBox: {
        backgroundColor: "white",
        width: 1000,
        height: 100,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center"
    },
    linksTitle: {
        color: "black",
        fontFamily: "Iceland",
        fontSize: 16,
        textDecorationLine: "underline",
        padding: 3
    },
    linksText: {
        color: "black",
        fontFamily: "Iceland",
        fontSize: 17,
    },
    linksImage: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
})

function Links() {
    return(
        <View style={styles.linksBox}> 
            <Text style={styles.linksTitle}>Contact</Text>
            <Text style={styles.linksText}>Mobile: 631-839-0886 | E-mail: rahmanzayaan43@gmail.com</Text>
            <Text style={styles.linksTitle}>Links</Text>
            <View style={styles.linksImage}>
                <motion.button  whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}>
                <TouchableOpacity onPress={() => {Linking.openURL("https://www.linkedin.com/in/zayaan-rahman-7b6368213/")}}>
                    <Image animation="pulse" style={{width: 25, height: 25}} source={require("../images/linkedin.png")}></Image>
                </TouchableOpacity>
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }}>
                <TouchableOpacity onPress={() => {Linking.openURL("https://github.com/zayaanra")}}>
                    <Image style={{width: 25, height: 25}} source={require("../images/GitHub-Mark.png")}></Image>
                </TouchableOpacity>
                </motion.button> 
            </View>
        </View>
    )
}

export default Links;