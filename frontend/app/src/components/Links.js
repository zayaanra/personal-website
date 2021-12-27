import { StyleSheet, View, Image, Text } from "react-native";

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
        fontFamily: "monospace",
        fontSize: 16,
        textDecorationLine: "underline",
        padding: 3
    },
    linksText: {
        color: "black",
        fontFamily: "monospace",
        fontSize: 16,
    },
    linksImage: {
        width: 25,
        height: 25,
        position: "relative"
    }
})

function Links() {
    return(
        <View style={styles.linksBox}> 
            <Text style={styles.linksTitle}>Contact</Text>
            <Text style={styles.linksText}>Mobile: 631-839-0886 | E-mail: rahmanzayaan43@gmail.com</Text>
            <Text style={styles.linksTitle}>Links</Text>
            <Image style={styles.linksImage} source={require("../images/linkedin.png")}></Image>
            <Image style={styles.linksImage} source={require("../images/GitHub-Mark.png")}></Image>
        </View>
    )
}

export default Links;