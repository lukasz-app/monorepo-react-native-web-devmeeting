import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Platform,
} from 'react-native';
import commonStyles from 'common/themes/styles';
import NavigationBar from 'common/components/NavigationBar';
import PlatformSpecificComponent from 'common/components/PlatformSpecificComponent'

class Other extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.appContainer}>
                    <Text style={[styles.text]} >
                        {"Other"}
                    </Text >
                    <View
                        style={{ flexDirection: 'row', }}
                    >
                        <PlatformSpecificComponent
                            ref={ref => { this.platformSpecificComponent = ref }}
                            name={Platform.OS}
                        />
                        <Text
                            onPress={() => { this.platformSpecificComponent.startAnimation() }}
                            style={[styles.textAnimate]} >
                            {'Animate'}
                        </Text>
                    </View>
                    <View />
                    <NavigationBar navigation={this.props.navigation} />
                </View>
            </SafeAreaView>
        );
    }
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
    text: {
        fontSize: 40, fontWeight: '900', color: 'white', alignSelf: 'center',
    },
    textAnimate: {
        fontSize: 20, color: 'white', alignSelf: 'center',
    }
});

export default Other;
