import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import commonStyles from 'common/themes/styles';

const Details = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.appContainer}>
                <View
                    style={{ flexDirection: 'row', justifyContent: "space-between", backgroundColor: "white", alignSelf: 'stretch' }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            console.log("Herre")
                            console.log({ ...navigation })
                            navigation.goBack();
                        }}
                    >

                        <Text style={styles.title}>{"Wróć"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{"Ekran szczegóły"}</Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        ...commonStyles.mainView,
    },
    appContainer: {
        flex: 1,
        alignSelf: 'stretch',
        padding: 16,
    },
    title: {
        ...commonStyles.title,
    },
    subtitle: {
        ...commonStyles.subtitle,
        marginTop: 10,
    },
    inputContainer: {
        ...commonStyles.inputContainer,
        marginTop: 10,
    },
    textInput: {
        backgroundColor: 'white',
        flex: 1,
    },
    addButton: {
        ...commonStyles.addButton,
        // marginTop: 10,
    },
});

export default Details;
