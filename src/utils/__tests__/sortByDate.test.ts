import { sortByDate } from '../sortByDate';
import { Transaction } from '../../model/Transaction';

describe('sortByDate', () => {
  const mockTransactions: Transaction[] = [
    {
      id: '1',
      merchant: 'Starbucks',
      amount: -5.99,
      date: '2024-01-15T10:00:00Z',
      category: 'Food & Drink',
      type: 'expense',
    },
    {
      id: '2',
      merchant: 'Salary',
      amount: 2500.0,
      date: '2024-01-01T08:00:00Z',
      category: 'Income',
      type: 'income',
    },
    {
      id: '3',
      merchant: 'Netflix',
      amount: -15.99,
      date: '2024-01-20T14:30:00Z',
      category: 'Entertainment',
      type: 'expense',
    },
  ];

  it('should sort transactions by date in descending order (most recent first)', () => {
    const result = sortByDate([...mockTransactions]);

    expect(result[0].id).toBe('3');
    expect(result[1].id).toBe('1');
    expect(result[2].id).toBe('2');
  });

  it('should handle empty array', () => {
    const result = sortByDate([]);
    expect(result).toEqual([]);
  });

  it('should handle single item array', () => {
    const singleItem = [mockTransactions[0]];
    const result = sortByDate([...singleItem]);
    expect(result).toEqual(singleItem);
  });

  it('should handle transactions with same date (maintain relative order)', () => {
    const sameDateTransactions: Transaction[] = [
      {
        id: '1',
        merchant: 'A',
        amount: -10,
        date: '2024-01-15T10:00:00Z',
        category: 'Test',
        type: 'expense',
      },
      {
        id: '2',
        merchant: 'B',
        amount: -20,
        date: '2024-01-15T10:00:00Z',
        category: 'Test',
        type: 'expense',
      },
    ];

    const result = sortByDate([...sameDateTransactions]);
    expect(result[0].id).toBe('1');
    expect(result[1].id).toBe('2');
  });

  it('should correctly sort dates in different formats', () => {
    const mixedDateTransactions: Transaction[] = [
      {
        id: '1',
        merchant: 'Old',
        amount: -10,
        date: '2024-01-01T00:00:00.000Z',
        category: 'Test',
        type: 'expense',
      },
      {
        id: '2',
        merchant: 'New',
        amount: -20,
        date: '2024-01-02T00:00:00Z',
        category: 'Test',
        type: 'expense',
      },
    ];

    const result = sortByDate([...mixedDateTransactions]);
    expect(result[0].id).toBe('2');
    expect(result[1].id).toBe('1');
  });
});
