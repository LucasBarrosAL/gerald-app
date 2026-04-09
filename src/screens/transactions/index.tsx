import { StyleSheet, View } from 'react-native';
import { useState, useMemo } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { Colors } from '../../theme/Colors';
import {
  TransactionsTypes,
  TransactionTypeFilter,
} from './TransactionTypeFilter';
import { TransactionList } from './TransactionList';
import { useTransactions } from '../../hooks/useTransactions';
import { filterTransactions } from './filterTransactions';
import { TransactionError } from './TransactionError';

export function TransactionHistoryScreen() {
  const { data, isLoading, isFetching, isError, error, refetch } =
    useTransactions();

  const [merchant, setMerchant] = useState<string>();
  const [selectedFilter, setSelectedFilter] =
    useState<TransactionsTypes>('All');

  const filteredTransactions = useMemo(
    () =>
      filterTransactions({
        data,
        filterType: selectedFilter,
        searchText: merchant,
      }),
    [data, selectedFilter, merchant],
  );

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
