import { AppRegistry } from 'react-native';
import * as appName from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName.name, () => App);
