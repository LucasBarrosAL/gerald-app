import React from 'react';
import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Transaction } from '../../model/Transaction';
import { TransactionItem } from './transactionItem/TransactionItem';
import { TransactionItemSkeleton } from './transactionItem/TransactionItemSkeleton';

interface TransactionListProps {
  transactions: Transaction[];
  loading?: boolean;
}

export function TransactionList({
  transactions,
  loading = false,
}: TransactionListProps) {
  if (loading) {
    return (
      <>
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </>
    );
  }

  const renderItem = ({ item }: { item: Transaction }) => (
    <TransactionItem transaction={item} />
  );

  const renderSkeleton = () => <TransactionItemSkeleton />;

  return (
    <FlashList
      data={loading ? [] : transactions}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={loading ? renderSkeleton : null}
      contentContainerStyle={styles.listContent}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
});
