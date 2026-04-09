import { useQuery } from '@tanstack/react-query';
import { fetchTransactions } from '../api/transactions';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: fetchTransactions,
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
