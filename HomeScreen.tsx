import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the types for your navigation stack
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  AddExpense: undefined;
  SettleDues: undefined;
};

// Define the type for the navigation prop
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

// Define the type for the route prop (if needed)
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

// Define the props for the component
interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

// Use the types in your component
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;