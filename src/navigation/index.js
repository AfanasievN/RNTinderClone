import { createSwitchNavigator } from 'react-navigation';

// Screens
import MainScreen from '../screens/Main';

// Main Navigator
export default createSwitchNavigator(
  {
    Main: MainScreen
  },
  {
    initialRouteName: 'Main'
  },
);
