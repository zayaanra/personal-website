/* This file will support the component for the homepage. It'll include a navbar, an image, and an About Me. */


import { StyleSheet, View, Image} from "react-native";
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
    aboutMe: {
        fontFamily: "monospace",
        color: "black",
    },
    test: {
        backgroundColor: "aliceblue"
    }
})
function Home() {
    return (
        <View style={styles.container}>
            <TopBar></TopBar>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://pbs.twimg.com/profile_images/1290649744616955905/BLJjEyAZ_400x400.jpg',
                }}
            /> 
        </View>
    );
}

export default Home;