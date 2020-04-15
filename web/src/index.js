import Router from 'common/navigation/Router';
import * as serviceWorker from './serviceWorker';
import { AppRegistry } from 'react-native'
import { createBrowserApp } from "@react-navigation/web";

AppRegistry.registerComponent('myprojectname', () => createBrowserApp(Router))
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})

serviceWorker.unregister();
