import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the types for your navigation stack
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AddExpense: undefined;
  SettleDues: undefined;
};

// Example: Type for HomeScreen navigation prop
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

// Example: Type for LoginScreen navigation prop
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

// Example: Type for RegisterScreen navigation prop
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
export type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

// Example: Type for AddExpenseScreen navigation prop
export type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;
export type AddExpenseScreenRouteProp = RouteProp<RootStackParamList, 'AddExpense'>;

// Example: Type for SettleDuesScreen navigation prop
export type SettleDuesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SettleDues'>;
export type SettleDuesScreenRouteProp = RouteProp<RootStackParamList, 'SettleDues'>;