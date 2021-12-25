/* This file will support the component for the homepage. It'll include a navbar, an image, and an About Me. */


import { StyleSheet, View, Image, Text} from "react-native";
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
        alignItems: "center",
        justifyContent: "center",
    },
    //TODO - Navbar should be 6 buttons layed out horizontally at the top. Button style: curved, black outline, light blue text.
    aboutMe: {
        fontFamily: "monospace",
        color: "black",
    }
})
//<Button style={styles.button} title="Home"></Button>
function Home() {
    return (
        <View style={styles.container}>
            <TopBar></TopBar>
            <View style={styles.navbar}> 
            </View>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://pbs.twimg.com/profile_images/1290649744616955905/BLJjEyAZ_400x400.jpg',
                }}
            /> 
            <Text style={styles.aboutMe}> About Me: </Text>
        </View>
    );
}

export default Home;