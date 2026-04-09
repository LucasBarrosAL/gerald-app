import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Tab } from '../../components/tab';
import { Colors } from '../../theme/Colors';

type TransactionsTypes = 'All' | 'Incomes' | 'Expenses';

interface TransactionTypeFilterProps {
  value?: TransactionsTypes;
  onChange?: (value: string) => void;
}

const options: TransactionsTypes[] = ['All', 'Incomes', 'Expenses'];

export function TransactionTypeFilter({
  value = 'All',
  onChange,
}: TransactionTypeFilterProps) {
  const [selected, setSelected] = useState<TransactionsTypes>(value);

  const handlePress = (option: TransactionsTypes) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <View style={styles.container}>
      {options.map(option => (
        <Tab
          key={option}
          name={option}
          selected={option === selected}
          onPress={() => handlePress(option)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 999,
    backgroundColor: Colors.ctaBackground,
    padding: 4,
    alignSelf: 'flex-start',
  },
});
