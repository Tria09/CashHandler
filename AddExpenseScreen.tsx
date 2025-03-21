import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

// Define the navigation and route types
type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;
type AddExpenseScreenRouteProp = RouteProp<RootStackParamList, 'AddExpense'>;

// Define the props for the component
interface AddExpenseScreenProps {
  navigation: AddExpenseScreenNavigationProp;
  route: AddExpenseScreenRouteProp;
}

const AddExpenseScreen: React.FC<AddExpenseScreenProps> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSave = () => {
    if (!title || !amount) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Validate amount (must be a number)
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber)) {
      Alert.alert('Error', 'Amount must be a valid number');
      return;
    }

    // Save the expense (you can replace this with your logic to save to a database or state)
    const expense = { title, amount: amountNumber };
    console.log('Expense saved:', expense);

    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expense Title</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Groceries"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 500"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Button title="Save Expense" onPress={handleSave} />
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

export default AddExpenseScreen;