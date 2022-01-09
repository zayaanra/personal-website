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
            <View>
            <Text style={styles.courseDesc}>CSE 115 was an introductory course that provided a 
            first-look at JSON, using APIs, as well as loops and variables using Python and JavaScript. The project for this course required us to pull data from the city of
            Buffalo using an API and a web framework as back-end (Bottle in Python). The repository for this project is available on my GitHub. </Text>
            </View>
        )
    } else if (name === "CSE 116") {
        return (
            <Text style={styles.courseDesc}>CSE 116 covered new concepts using Scala such as object-oriented programming, functional programming, data structures,
            and concurrency. Polymorphism, the power of functional programming, recursion, linked lists, and trees were all introduced in this course. To get practice on these concepts,
            a project was assigned for each topic. An example would be a Genetic Algorithm and the use of recursion for this project. The repository is private but available upon request.
             </Text>
        )
    } else if (name === "CSE 191") {
        return (
            <Text style={styles.courseDesc}>CSE 191 (Discrete Structures) was an introduction to logic, proofs, sets, functions, graphs, trees, regular languages, and counting theory.
            Several Python homeworks were assigned in order to practice solving logical problems and using Python data structures to better understand how sets, graphs, and trees work.
             </Text>
        )
    } else if (name === "CSE 220") {
        return (
            <Text style={styles.courseDesc}>CSE 220 (Systems Programming) is taught in the C programming language. Instead of relying on higher level languages to do work for us,
            CSE 220 taught me how memory works and how that plays a big role when programming. The course also provided me an introduction to new concepts such as 
            VM (Virtual Machine), the Linux terminal, Git, types of memory, virtual memory, and much more. I also serve as an Undergraduate Teaching Assistant for this course.
            </Text>
        )
    } else if (name === "CSE 250") {
        return (
            <Text style={styles.courseDesc}>CSE 250 (Data Structures and Algorithms) is taught in Scala. The course provided in-depth analysis of common data structures as well as new
            data structures. This ranges from arrays, linked lists, hash maps, all the way to stacks, queues, and heaps. In order to understand these data structures better, I was taught
            runtime analysis and writing proofs using induction in order to understand why certain data structures work in a certain way. Furthermore, algorithms such as breadth-first
            search and depth-first search were also taught. To better understand these concepts, the programming assignments provided in the course were designed in such a way that a certain 
            runtime had to be achieved.
            </Text>
        )
    } else if (name === "CSE 341") {
        return (
            <Text style={styles.courseDesc}>CSE 341 (Computer Organization) was primarily taught in three separate ways. The course first provided an introduction how a computer
            stores memory as well as how the computer understand simple instructions. Assembly (MIPS) was used as a way to teach this. The second part provided an in-depth analysis
            of how a computer is internally wired to handle instruction execution. SystemVerilog was used to design programs that could simulate a datapath. The last part was 
            looking at how caches and caching work. To better understand caching models, DineroIV was used to simulate caching.</Text>
        )
    } else if (name === "CSE 312") {
        return (
            <Text style={styles.courseDesc}>CSE 312 (Web Development) was an introduction to full-stack web development. I would say that this course gauged my interest in web development
            and is one of the reasons why I enjoy web development. The course was "free" in the sense that you could use any language to program in. I chose Python as I was most experienced
            in it at the time. The course went in depth on concepts such as HTTP requests, APIs, AJAX, databases, encryption, authentication, and sockets. Homeworks were released to
            build up a static website to a dynamic website.
            </Text>
        )
    } else {
        return (
            <View>
                <Text style={styles.courseDesc}>Want to learn about one of these courses?</Text> 
                <Text style={styles.courseDesc}>Click on them to reveal a description!</Text>
            </View>
        )
    }
}

export default CourseDesc;