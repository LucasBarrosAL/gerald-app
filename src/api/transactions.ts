import transactionsMock from '../../mock/response';
import { Transaction } from '../model/Transaction';

const delay = (ms: number) =>
  new Promise(resolve => setTimeout(() => resolve(undefined), ms));

export const fetchTransactions = async () => {
  await delay(1000 * 2);

  // simulate failure (20%)
  if (Math.random() < 0.2) {
    throw new Error('Network error');
  }

  if (Math.random() < 0.2) {
    throw new Error('Unexpected error');
  }

  return transactionsMock as Transaction[];
};
