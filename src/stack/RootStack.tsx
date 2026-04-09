import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { HomeScreen } from '../screens/home/Home';
import { TransactionHistoryScreen } from '../screens/transactions/TransactionHistoryScreen';

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
    Transactions: TransactionHistoryScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
