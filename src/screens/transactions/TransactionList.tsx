import React from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Transaction } from '../../model/Transaction';
import { TransactionItem } from './item/TransactionItem';
import { TransactionItemSkeleton } from './item/TransactionItemSkeleton';
import { Colors } from '../../theme/Colors';
import { EmptyState } from '../../components/EmptyState';

interface TransactionListProps {
  transactions?: Transaction[];
  loading?: boolean;
  isRefreshing?: boolean;
  onRefresh?: () => void;
}

export function TransactionList({
  transactions,
  loading = false,
  isRefreshing = false,
  onRefresh,
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

  const renderEmptyState = () => (
    <EmptyState
      title="No transactions found"
      message="Your transaction history will appear here once you start making transactions."
    />
  );

  return (
    <FlashList
      data={transactions || []}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyState}
      contentContainerStyle={styles.listContent}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor={Colors.accent}
          colors={[Colors.accent, Colors.danger, Colors.success]}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
});
