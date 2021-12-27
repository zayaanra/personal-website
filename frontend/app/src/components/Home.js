/* This file will support the component for the homepage. It'll include a navbar, an image, and an About Me. */


import { StyleSheet, View, Image, Text } from "react-native";
import TopBar from "./TopBar";

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
        fontFamily: "monospace",
        fontSize: 50,
        color: "black",
    },
    description: {
        fontFamily: "monospace",
        fontSize: 16,
        color: "black",
        padding: 10
    },
    linksBox: { //TODO - move links component to different file
        backgroundColor: "white",
        width: 1000,
        height: 100,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center"
    },
    linksTitle: {
        color: "black",
        fontFamily: "monospace",
        fontSize: 16,
        textDecorationLine: "underline"
    },
    linksText: {
        color: "black",
        fontFamily: "monospace",
        fontSize: 16,
    }
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
            <Text style={styles.name}> Zayaan Rahman </Text>
            <Text style = {styles.description}>I am a Computer Science student studying at SUNY University at Buffalo currently in my third year.</Text>
            <Text style = {styles.description}>Currently, I am interested in cybersecurity, web development, and how important those are in the modern world.</Text>
            <Text style = {styles.description}>It was only until recently where I realized that I wanted to learn cybersecurity and web development, up until then, I had no idea what part of Computer Science I wanted to be apart of.</Text>
            <Text style = {styles.description}>With the world we live, security threats are more important than ever and I wish to improve my understanding and help make the world a safer place.</Text>
            <View style={styles.linksBox}> 
                <Text style={styles.linksTitle}>Contact</Text>
                <Text style={styles.linksText}>Mobile: 631-839-0886 | E-mail: rahmanzayaan43@gmail.com</Text>
                <Text style={styles.linksTitle}>Links</Text>
            </View>
        </View>
    );
}

export default Home;