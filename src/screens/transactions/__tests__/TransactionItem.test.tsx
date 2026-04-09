import { render } from '@testing-library/react-native';
import { Transaction } from '../../../model/Transaction';
import { Colors } from '../../../theme/Colors';
import { TransactionItem } from '../item/TransactionItem';
import { StyleSheet } from 'react-native';

jest.mock('../../../utils/formatCurrency', () => ({
  formatCurrency: jest.fn(() => ({
    format: (value: number) =>
      value < 0 ? `-$${Math.abs(value).toFixed(2)}` : `$${value.toFixed(2)}`,
  })),
}));

describe('TransactionItem', () => {
  const incomeTransaction: Transaction = {
    id: '1',
    merchant: 'Apple',
    amount: 2500.0,
    date: '2026-02-27T15:26:08Z',
    category: 'Refund',
    type: 'income',
  };

  const expenseTransaction: Transaction = {
    id: '2',
    merchant: 'Gym',
    amount: -75.5,
    date: '2026-02-27T22:42:27Z',
    category: 'General',
    type: 'expense',
  };

  const flattenStyle = (style: any) => StyleSheet.flatten(style);

  it('renders category, date, merchant and formatted amount for income', () => {
    const { getByText } = render(
      <TransactionItem transaction={incomeTransaction} />,
    );

    expect(getByText('Refund')).toBeTruthy();
    expect(getByText('Feb 27')).toBeTruthy();
    expect(getByText('Apple')).toBeTruthy();
    expect(getByText('$2500.00')).toBeTruthy();
  });

  it('renders income amount with success color', () => {
    const { getByText } = render(
      <TransactionItem transaction={incomeTransaction} />,
    );

    const amountText = getByText('$2500.00');
    expect(flattenStyle(amountText.props.style).color).toBe(Colors.success);
  });

  it('renders expense amount with danger color', () => {
    const { getByText } = render(
      <TransactionItem transaction={expenseTransaction} />,
    );

    expect(getByText('General')).toBeTruthy();
    expect(getByText('Feb 27')).toBeTruthy();
    expect(getByText('Gym')).toBeTruthy();
    expect(getByText('-$75.50')).toBeTruthy();

    const amountText = getByText('-$75.50');
    expect(flattenStyle(amountText.props.style).color).toBe(Colors.danger);
  });
});
