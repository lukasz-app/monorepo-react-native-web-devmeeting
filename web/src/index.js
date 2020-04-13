import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppRegistry } from 'react-native'

AppRegistry.registerComponent('myprojectname', () => App)
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})

serviceWorker.unregister();
