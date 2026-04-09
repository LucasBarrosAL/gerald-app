import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { Colors } from '../../theme/Colors';
import { useState } from 'react';
import { TransactionTypeFilter } from './TransactionTypeFilter';
import { TransactionList } from './TransactionList';

import mockResponse from '../../../mock/response';
import { Transaction } from '../../model/Transaction';

export function TransactionHistoryScreen() {
  const [merchant, setMerchant] = useState<string>();
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for merchant..."
        onSearch={text => {
          console.log(text);
          setMerchant(text);
        }}
      />
      {/* <Text>{`Search: ${merchant}`}</Text> */}
      <TransactionTypeFilter />
      <TransactionList
        transactions={mockResponse as Transaction[]}
        loading={loading}
      />
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
