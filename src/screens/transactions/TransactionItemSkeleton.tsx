import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../theme/Colors';

export function TransactionItemSkeleton() {
  return (
    <View style={styles.container}>
      <View style={styles.categoryRow}>
        <View style={[styles.skeletonBlock, styles.categorySkeleton]} />
      </View>
      <View style={[styles.infoRow, styles.skeletonRow]}>
        <View style={[styles.skeletonBlock, styles.dateSkeleton]} />
        <View style={[styles.skeletonBlock, styles.merchantSkeleton]} />
        <View style={[styles.skeletonBlock, styles.amountSkeleton]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral,
  },
  categoryRow: {
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 16,
  },
  skeletonRow: {
    alignItems: 'center',
  },
  skeletonBlock: {
    backgroundColor: Colors.neutral,
    borderRadius: 8,
  },
  categorySkeleton: {
    width: '30%',
    height: 12,
  },
  dateSkeleton: {
    width: 60,
    height: 14,
  },
  merchantSkeleton: {
    flex: 1,
    height: 20,
  },
  amountSkeleton: {
    width: 75,
    height: 14,
  },
});
