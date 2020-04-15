import { AppRegistry } from 'react-native';
import Router from 'common/navigation/Router';
import { name as appName } from './app.json';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => createAppContainer(Router));
