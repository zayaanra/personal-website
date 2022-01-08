import { Animated } from "react-native";
import React, { useRef } from 'react';

/* https://reactnative.dev/docs/animations */
const FadeOut = (props) => {
    const fadeAnim = useRef(new Animated.Value(1)).current
    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 2500,
            }
        ).start();
    }, [fadeAnim])
    return (
        <Animated.View
          style={{
                ...props.style,
              opacity: fadeAnim,
              alignItems: "center",
              justifyContent: "center",
         }}
     >
            {props.children}
        </Animated.View>
    );
}

export default FadeOut;