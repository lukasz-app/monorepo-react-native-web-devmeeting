import React from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'

class PlatformSpecificComponent extends React.Component {
    state = {
        animatedValue: new Animated.Value(1)
    }

    startAnimation(up) {
        Animated.timing(
            this.state.animatedValue,
            {
                toValue: up ? 1 : 0,
                duration: 2000,
                useNativeDriver: true
            }
        ).start(() => { this.startAnimation(!up) });
    }

    render() {
        const { name } = this.props;
        return (
            <View style={styles.border} >
                <Animated.Text
                    style={[styles.text, { opacity: this.state.animatedValue }]} >
                    {name}
                </Animated.Text >
            </View>
        )
    }
};

const styles = StyleSheet.create({
    border: {
        borderColor: 'white', borderWidth: 3, flex: 1, padding: 10, margin: 5
    },
    text: {
        fontSize: 40, fontWeight: '900', color: 'white', alignSelf: 'center'
    }
})
export default PlatformSpecificComponent;

