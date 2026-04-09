import { useQuery } from '@tanstack/react-query';
import { fetchTransactions } from '../api/transactions';
import { Transaction } from '../model/Transaction';
import { sortByDate } from '../utils/sortByDate';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
    select: (data: Transaction[]) => {
      return sortByDate(data);
    },
    retry: (failureCount, error) => {
      if (error.message === 'Network error') {
        return failureCount < 3;
      }
      return false;
    },
    retryDelay: attempt => {
      return Math.min(1000 * 2 ** attempt, 5000);
    },
    staleTime: 0,
    // staleTime: 1000 * 60,
  });
}
