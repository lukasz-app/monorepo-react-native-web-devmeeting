import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { title, subtitle } from 'common/app.json';
import commonStyles from 'common/styles';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: commonStyles.color.background,
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: commonStyles.color.title,
    fontSize: commonStyles.textSize.title,
  },
  subtitle: {
    marginTop: 10,
    color: commonStyles.color.subtitle,
    fontSize: commonStyles.textSize.subtitle,
  },
});

export default App;
