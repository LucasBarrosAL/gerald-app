import { StyleSheet, View } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { Colors } from '../../theme/Colors';
import { useState, useMemo } from 'react';
import {
  TransactionsTypes,
  TransactionTypeFilter,
} from './TransactionTypeFilter';
import { TransactionList } from './TransactionList';
import { useTransactions } from '../../hooks/useTransactions';
import { Transaction } from '../../model/Transaction';
import { TransactionError } from './TransactionError';

export function TransactionHistoryScreen() {
  const { data, isLoading, isFetching, isError, error, refetch } =
    useTransactions();

  const [merchant, setMerchant] = useState<string>();
  const [selectedFilter, setSelectedFilter] =
    useState<TransactionsTypes>('All');

  const filteredTransactions = useMemo(() => {
    if (!data) return [];

    const searchTerm = merchant?.trim().toLowerCase() ?? '';

    let filtered = data;

    if (selectedFilter !== 'All') {
      const transactionType =
        selectedFilter === 'Incomes' ? 'income' : 'expense';
      filtered = filtered.filter(
        (transaction: Transaction) => transaction.type === transactionType,
      );
    }

    if (searchTerm.length > 0) {
      filtered = filtered.filter(transaction =>
        transaction.merchant.toLowerCase().includes(searchTerm),
      );
    }

    return filtered;
  }, [data, selectedFilter, merchant]);

  if (isError) {
    return <TransactionError message={error.message} onRetry={refetch} />;
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
        <TransactionTypeFilter
          value={selectedFilter}
          onChange={setSelectedFilter}
        />
      </View>
      <TransactionList
        transactions={filteredTransactions}
        loading={isLoading}
        isRefreshing={!isLoading && isFetching}
        onRefresh={refetch}
      />
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
