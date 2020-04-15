import React from 'react';
import { View, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native'
const borderWidth = 600;

const NavigationBar = ({ navigation }) => {
    const [width, setWidth] = React.useState(Dimensions.get("window").width);
    React.useEffect(() => {
        Dimensions.addEventListener("change", handler);
    }, []);

    const handler = ({ window: { width } }) => { setWidth(width) };
    return (
        <View
            style={[style.container, width > borderWidth ? { top: 0 } : { bottom: 0 }, { width }]}
        >
            {
                ["Main", "Details", "Other"].map(route => {
                    const selected = route == navigation.state.routeName;
                    return (<TouchableOpacity key={route}
                        style={[style.buttonContainer, selected && style.selectedButtonContainer]}
                        onPress={() => {
                            navigation.navigate(route, { title: "Navigated from nav bar" })
                        }}
                    >
                        <Text style={[style.buttonText, selected && style.selectedButtonText]} >
                            {route}
                        </Text>
                    </TouchableOpacity>)
                }
                )
            }
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        position: 'absolute', height: 40, backgroundColor: "white", flexDirection: 'row'
    },
    buttonContainer:
        { borderWidth: 2, borderColor: 'red', flex: 1, justifyContent: "center", alignItems: 'center' }
    , buttonText:
        { fontSize: 22, color: "black" },
    selectedButtonContainer:
        { borderWidth: 2, backgroundColor: 'red', flex: 1, justifyContent: "center", alignItems: 'center' }
    , selectedButtonText:
        { color: "white" }

})

export default NavigationBar;