import { Button, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { Colors } from '../../theme/Colors';
import { useState } from 'react';
import { TransactionTypeFilter } from './TransactionTypeFilter';
import { TransactionList } from './TransactionList';
import { useTransactions } from '../../hooks/useTransactions';

export function TransactionHistoryScreen() {
  const [merchant, setMerchant] = useState<string>();
  const { data, isLoading, isError, refetch } = useTransactions();

  if (isError) {
    return (
      <View>
        <Text>Something went wrong</Text>
        <Button title="Try again" onPress={() => refetch()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <SearchBar
          placeholder="Search for merchant..."
          onSearch={text => {
            console.log(text);
            setMerchant(text);
          }}
        />
        <Text>{`Search: ${merchant}`}</Text>
        <TransactionTypeFilter />
      </View>
      <TransactionList transactions={data} loading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral,
  },
  headerWrapper: {
    padding: 16,
    gap: 16,
  },
});
