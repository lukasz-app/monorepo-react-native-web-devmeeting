import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { title, subtitle } from 'common/app.json';
import commonStyles from 'common/styles';
import useToDoState from 'common/state';

const App = () => {
  const { todos, addToDo, removeToDo, setTempTitle, tempTitle } = useToDoState();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={tempTitle}
            onChangeText={setTempTitle}
            style={styles.textInput}
          />
          <TouchableOpacity onPress={addToDo} style={styles.addButton}>
            <Text>{'Dodaj'}</Text>
          </TouchableOpacity>
        </View>
        {todos.map((t) => (
          <View style={commonStyles.todo}>
            <Text>Title: {t.title}</Text>
            <TouchableOpacity
              style={commonStyles.removeButton}
              onPress={() => {
                removeToDo(t.id);
              }}>
              <Text>USUŃ</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    alignItems: 'center',
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

export default App;
