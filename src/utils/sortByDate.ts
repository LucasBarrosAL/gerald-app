import { Transaction } from '../model/Transaction';

export const sortByDate = (data: Transaction[]) =>
  data.sort((a: Transaction, b: Transaction) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
