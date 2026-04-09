export interface Transaction {
  id: string;
  merchant: string; // e.g., "Starbucks", "Direct Deposit"
  amount: number; // positive for income, negative for expenses
  date: string; // ISO 8601 format
  category: string; // e.g., "Food & Drink", "Income", "Shopping"
  type: 'income' | 'expense';
}
