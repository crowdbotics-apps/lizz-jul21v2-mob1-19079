import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings84099Navigator from '../features/Settings84099/navigator';
import UserProfile84092Navigator from '../features/UserProfile84092/navigator';
import Settings84091Navigator from '../features/Settings84091/navigator';
import Settings84089Navigator from '../features/Settings84089/navigator';
import SignIn284087Navigator from '../features/SignIn284087/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings84099: { screen: Settings84099Navigator },
UserProfile84092: { screen: UserProfile84092Navigator },
Settings84091: { screen: Settings84091Navigator },
Settings84089: { screen: Settings84089Navigator },
SignIn284087: { screen: SignIn284087Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
