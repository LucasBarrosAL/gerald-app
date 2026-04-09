import { filterTransactions } from '../src/screens/transactions/filterTransactions';
import { Transaction } from '../src/model/Transaction';
import mockTransactions from '../mock/response';

describe('filterTransactions', () => {
  const transactions: Transaction[] = mockTransactions as Transaction[];

  it('returns empty array when data is undefined', () => {
    expect(
      filterTransactions({
        data: undefined,
        filterType: 'All',
        searchText: undefined,
      }),
    ).toEqual([]);
  });

  it('returns all transactions when no filters applied', () => {
    expect(
      filterTransactions({
        data: transactions,
        filterType: 'All',
        searchText: undefined,
      }),
    ).toEqual(transactions);

    expect(
      filterTransactions({
        data: transactions,
        filterType: 'All',
        searchText: '',
      }),
    ).toEqual(transactions);
  });

  it('filters by income type', () => {
    const mockList: Transaction[] = [
      {
        id: '00674038-48fd-4441-a46f-0f05c5e7ff62',
        merchant: 'Gym',
        amount: -2299.67,
        date: '2026-01-09T20:20:32Z',
        category: 'General',
        type: 'expense',
      },
      {
        id: 'a2fcaa9b-db56-4f97-b6f4-c808a2657783',
        merchant: 'Electricity',
        amount: 4135.18,
        date: '2026-01-06T01:53:32Z',
        category: 'Refund',
        type: 'income',
      },
    ];

    const result = filterTransactions({
      data: mockList,
      filterType: 'Incomes',
      searchText: undefined,
    });

    const element = mockList[1];
    expect(result.every(t => t.type === 'income')).toBe(true);
    expect(result[0]).toEqual(element);
  });

  it('filters by expense type', () => {
    const mockList: Transaction[] = [
      {
        id: '00674038-48fd-4441-a46f-0f05c5e7ff62',
        merchant: 'Gym',
        amount: -2299.67,
        date: '2026-01-09T20:20:32Z',
        category: 'General',
        type: 'expense',
      },
      {
        id: 'a2fcaa9b-db56-4f97-b6f4-c808a2657783',
        merchant: 'Electricity',
        amount: 4135.18,
        date: '2026-01-06T01:53:32Z',
        category: 'Refund',
        type: 'income',
      },
    ];

    const result = filterTransactions({
      data: mockList,
      filterType: 'Expenses',
      searchText: undefined,
    });

    const element = mockList[0];
    expect(result.every(t => t.type === 'expense')).toBe(true);
    expect(result[0]).toEqual(element);
  });

  it('filters by merchant search', () => {
    const result = filterTransactions({
      data: transactions,
      filterType: 'All',
      searchText: 'gym',
    });
    expect(result.every(t => t.merchant.toLowerCase().includes('gym'))).toBe(
      true,
    );
    expect(result.length).toBe(3);
  });

  it('combines type and merchant filters', () => {
    const result = filterTransactions({
      data: transactions,
      filterType: 'Incomes',
      searchText: 'apple',
    });
    expect(
      result.every(
        t => t.type === 'income' && t.merchant.toLowerCase().includes('apple'),
      ),
    ).toBe(true);
    expect(result.length).toBe(1);
  });

  it('returns empty array when no matches for combined filters', () => {
    const result = filterTransactions({
      data: transactions,
      filterType: 'Incomes',
      searchText: 'nonexistent',
    });
    expect(result).toEqual([]);
  });
});
