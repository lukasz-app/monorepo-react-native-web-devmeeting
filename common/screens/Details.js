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

const Details = ({ navigation }) => {
    const [animatedValue] = React.useState(new Animated.Value(0));
    const startAnimation = (up) => {
        Animated.timing(
            animatedValue,
            {
                toValue: up ? 1 : 0,
                duration: 2000,
                useNativeDriver: true
            }
        ).start(() => { startAnimation(!up) });
    };
    React.useEffect(() => {
        startAnimation(true);
    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.appContainer}>
                <View style={styles.headerContainer}>
                    <Text onPress={() => { navigation.goBack(); }}
                        style={styles.subtitle}>{"Wróć"}</Text>
                    <Text style={styles.title}>{"Ekran szczegóły"}</Text>
                </View>
                <Animated.Text style={[{ opacity: animatedValue }, styles.animatedText]} >
                    {navigation.state.params.title}
                </Animated.Text >
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
        paddingTop: 70,
        justifyContent: 'space-between'
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

export default Details;
