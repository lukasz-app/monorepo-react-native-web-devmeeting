import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Animated,
} from 'react-native';
import commonStyles from 'common/themes/styles';
import NavigationBar from 'common/components/NavigationBar';

const Other = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.appContainer}>
                <Text style={[styles.animatedText]} >
                    {"Other"}
                </Text >
                <View />
                <NavigationBar navigation={navigation} />
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
        justifyContent: 'space-between',
        paddingTop: 70,
    },
    title: {
        ...commonStyles.title,
    },
    subtitle: {
        ...commonStyles.subtitle,
    },
    headerContainer: {
        flexDirection: 'row', justifyContent: "space-between", alignItems: 'flex-start', marginBottom: 20
    },
    animatedText: {
        fontSize: 40, fontWeight: '900', color: 'white', alignSelf: 'center',
    }
});

export default Other;
