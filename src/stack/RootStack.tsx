import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/Home';
import { HistoryScreen } from '../screens/history/History';
import { createStaticNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  History: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
    History: HistoryScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
