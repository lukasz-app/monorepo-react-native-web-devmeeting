import React from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native'
const Modal = ({ isVisible, hide }) => {

    const [opacity] = React.useState(new Animated.Value(0));
    const [pointerEvents, setPointerEvents] = React.useState("none");

    const startAnimation = (show) => {
        Animated.timing(
            opacity,
            {
                toValue: show ? 0.7 : 0,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    };
    React.useEffect(() => {
        startAnimation(isVisible);
        setPointerEvents(isVisible ? "box-none" : "none")
    }, [isVisible]);

    return (
        <View pointerEvents={pointerEvents}
            style={[StyleSheet.absoluteFill]}
        >

            <Animated.View style={[StyleSheet.absoluteFill, { opacity, backgroundColor: "black" }]} >

            </Animated.View>

            {isVisible && <View
                style={[StyleSheet.absoluteFill, { alignItems: "center", justifyContent: "center" }]}
            >
                <View
                    style={[{ backgroundColor: "white", height: 150, padding: 20, alignItems: "center", justifyContent: "space-evenly" }]}
                >
                    <Text
                        style={{ fontSize: 20 }}
                    >
                        {"Can not be empty"}
                    </Text>

                    <Text
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => { hide() }}>
                        {"OK"}
                    </Text>


                </View>
            </View>}
        </View >


    );
};

export default Modal;