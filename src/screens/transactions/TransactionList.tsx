import React from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Transaction } from '../../model/Transaction';
import { TransactionItem } from './item/TransactionItem';
import { TransactionItemSkeleton } from './item/TransactionItemSkeleton';
import { Colors } from '../../theme/Colors';

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

  const renderSkeleton = () => <TransactionItemSkeleton />;

  return (
    <FlashList
      data={transactions || []}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={loading ? renderSkeleton : null}
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
