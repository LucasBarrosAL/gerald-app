import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/Home';
import { TransactionListScreen } from '../screens/transactions/TransactionList';
import { createStaticNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Transactions: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Transactions',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
    Transactions: TransactionListScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
