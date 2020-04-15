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
                    style={styles.headerContainer}
                >
                    <Text
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={styles.subtitle}>{"Wróć"}</Text>
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
    },
    headerContainer: {
        flexDirection: 'row', justifyContent: "space-between", alignItems: 'flex-start',
    }
});

export default Details;
