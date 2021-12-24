/* This file will support the component for the homepage. It'll include a navbar, an image, and an About Me. */

import { StyleSheet, View, Image, Text, Button, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;

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
    },
    //TODO - Navbar should be 6 buttons layed out horizontally at the top. Button style: curved, black outline, light blue text.
    navbar: {
        fontFamily: "monospace",
        backgroundColor: "white",
        color: "lightskyblue",
        width: windowWidth,
        height: 100,
        flexDirection: "row",
    },
    button: {
        backgroundColor: "white",
        fontFamily: "monospace",
        color: "lightskyblue",
        borderRadius: 10,
        borderColor: "black",
        alignItems: "top-left",
    },
    aboutMe: {
        fontFamily: "monospace",
        color: "black",
    }
})
//<Button style={styles.button} title="Home"></Button>
function Home() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://pbs.twimg.com/profile_images/1290649744616955905/BLJjEyAZ_400x400.jpg',
                }}
            /> 
            <View style={styles.navbar}> 
            </View>
            <Text style={styles.aboutMe}> About Me: </Text>
        </View>
    );
}

export default Home;