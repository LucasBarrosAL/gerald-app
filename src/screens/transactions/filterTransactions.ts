import { Transaction } from '../../model/Transaction';
import { TransactionsTypes } from './TransactionTypeFilter';

const filterByTransactionType = (
  filterType: string,
  transactionList: Transaction[],
) => {
  const transactionType = filterType === 'Incomes' ? 'income' : 'expense';

  transactionList = transactionList.filter(
    (transaction: Transaction) => transaction.type === transactionType,
  );
  return transactionList;
};

const filterByMerchant = (searchTerm: string, transactionList: Transaction[]) =>
  transactionList.filter(transaction =>
    transaction.merchant.toLowerCase().includes(searchTerm),
  );

export const filterTransactions = ({
  data,
  filterType,
  searchText,
}: {
  data?: Transaction[];
  filterType: TransactionsTypes;
  searchText?: string;
}): Transaction[] => {
  if (!data) return [];

  const searchTerm = searchText?.trim().toLowerCase() ?? '';

  let filtered = data;

  if (filterType !== 'All') {
    filtered = filterByTransactionType(filterType, filtered);
  }

  if (searchTerm.length > 0) {
    filtered = filterByMerchant(searchTerm, filtered);
  }

  return filtered;
};
