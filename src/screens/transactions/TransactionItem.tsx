import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Transaction } from '../../model/Transaction';
import { Colors } from '../../theme/Colors';
import { formatDate } from '../../utils/formatDate';
import { formatCurrency } from '../../utils/formatCurrency';

interface TransactionItemProps {
  transaction: Transaction;
}

const getAmountColor = (type: 'income' | 'expense') => {
  return type === 'income' ? Colors.success : Colors.danger;
};

const formatAmount = (amount: number) => {
  return formatCurrency().format(amount);
};

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.categoryRow}>
        <Text style={styles.category}>{transaction.category}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.date}>{formatDate(transaction.date)}</Text>
        <Text style={styles.merchant}>{transaction.merchant}</Text>
        <Text
          style={[styles.amount, { color: getAmountColor(transaction.type) }]}
        >
          {formatAmount(transaction.amount)}
        </Text>
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
  category: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  infoRow: {
    flexDirection: 'row',
    gap: 16,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  merchant: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
    maxWidth: 75,
  },
});
