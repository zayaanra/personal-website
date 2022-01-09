import { StyleSheet, View, Image, Text, } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    courseDesc: {
        fontFamily: "Arial",
        fontSize: 40,
    },
})

function CourseDesc(name) {
    if (name === "CSE 115") {
        return (
            <Text style={styles.courseDesc}>CSE 115 was an introductory course that provided a 
            first-look at JSON, using APIs, as well as loops and variables using Python and JavaScript. The project for this course required us to pull data from the city of
            Buffalo using an API and a web framework as back-end (Bottle in Python). The repository for this project is available on my GitHub. </Text>
        )
    } else if (name == "CSE 116") {
        return (
            <Text style={styles.courseDesc}>CSE 116 covered new concepts using Scala such as object-oriented programming, functional programming, data structures,
            and concurrency. Polymorphism, the power of functional programming, recursion, linked lists, and trees were all introduced in this course. To get practice on these concepts,
            a project was assigned for each topic. An example would be a Genetic Algorithm and the use of recursion for this project. The repository is private but available upon request.
             </Text>
        )
    } else {
        return (
            <Text style={styles.courseDesc}>Want to learn about one of these courses? Click on them to reveal a description!</Text>
        )
    }
}

export default CourseDesc;