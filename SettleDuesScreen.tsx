import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

// Define the navigation and route types
type SettleDuesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SettleDues'>;
type SettleDuesScreenRouteProp = RouteProp<RootStackParamList, 'SettleDues'>;

// Define the props for the component
interface SettleDuesScreenProps {
  navigation: SettleDuesScreenNavigationProp;
  route: SettleDuesScreenRouteProp;
}

const SettleDuesScreen: React.FC<SettleDuesScreenProps> = ({ navigation }) => {
  const [amount, setAmount] = useState('');

  const handleSettle = () => {
    if (!amount) {
      Alert.alert('Error', 'Please enter an amount');
      return;
    }

    // Validate amount (must be a number)
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber)) {
      Alert.alert('Error', 'Amount must be a valid number');
      return;
    }

    // Settle the dues (you can replace this with your logic to update the database or state)
    console.log('Dues settled:', amountNumber);

    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Amount to Settle</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 500"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Button title="Settle Dues" onPress={handleSettle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default SettleDuesScreen;