import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {title, subtitle} from 'common/app.json';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
