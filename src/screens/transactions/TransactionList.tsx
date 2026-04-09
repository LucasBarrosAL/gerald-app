import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { Colors } from '../../theme/Colors';
import { useState } from 'react';
import { TransactionItem } from './TransactionItem';
import { TransactionItemSkeleton } from './TransactionItemSkeleton';
import { TransactionTypeFilter } from './TransactionTypeFilter';

export function TransactionListScreen() {
  const [merchant, setMerchant] = useState<string>();
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for merchant..."
        onSearch={text => {
          console.log(text);
          setMerchant(text);
        }}
      />
      <Text>{`Search: ${merchant}`}</Text>
      <TransactionTypeFilter />
      <TransactionItem
        transaction={{
          id: '51d39989-786f-4d27-9e36-100c60a0e4d4',
          merchant: 'Gym',
          amount: -3596.56,
          date: '2026-02-27T22:42:27Z',
          category: 'General',
          type: 'expense',
        }}
      />
      <TransactionItem
        transaction={{
          id: 'a2fcaa9b-db56-4f97-b6f4-c808a2657783',
          merchant: 'Electricity',
          amount: 4135.18,
          date: '2026-01-06T01:53:32Z',
          category: 'Refund',
          type: 'income',
        }}
      />
      <TransactionItemSkeleton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: Colors.neutral,
  },
});
