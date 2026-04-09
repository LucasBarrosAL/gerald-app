import { formatCurrency } from '../src/utils/formatCurrency';

import * as RNLocalize from 'react-native-localize';

jest.mock('react-native-localize', () => ({
  getLocales: jest.fn(),
}));

const mockRNLocalize = RNLocalize as jest.Mocked<typeof RNLocalize>;

describe('formatCurrency', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fallback to en-US when no locales are available', () => {
    mockRNLocalize.getLocales.mockReturnValue([]);

    const formatter = formatCurrency();
    expect(formatter.resolvedOptions().locale).toBe('en-US');
  });

  it('should use USD as currency', () => {
    mockRNLocalize.getLocales.mockReturnValue([
      {
        languageTag: 'en-US',
        languageCode: 'en',
        countryCode: 'US',
        isRTL: false,
      },
    ]);

    const formatter = formatCurrency();
    expect(formatter.resolvedOptions().currency).toBe('USD');
  });

  it('should format numbers correctly for en-US locale', () => {
    mockRNLocalize.getLocales.mockReturnValue([
      {
        languageTag: 'en-US',
        languageCode: 'en',
        countryCode: 'US',
        isRTL: false,
      },
    ]);

    const formatter = formatCurrency();
    expect(formatter.format(1234.56)).toBe('$1,234.56');
    expect(formatter.format(-500)).toBe('-$500.00');
    expect(formatter.format(0)).toBe('$0.00');
  });

  it('should format numbers correctly for pt-BR locale', () => {
    mockRNLocalize.getLocales.mockReturnValue([
      {
        languageTag: 'pt-BR',
        languageCode: 'pt',
        countryCode: 'BR',
        isRTL: false,
      },
    ]);

    const formatter = formatCurrency();
    expect(formatter.format(1234.56)).toBe('US$\u00A01.234,56');
    expect(formatter.format(-500)).toBe('-US$\u00A0500,00');
  });

  it('should handle large numbers', () => {
    mockRNLocalize.getLocales.mockReturnValue([
      {
        languageTag: 'en-US',
        languageCode: 'en',
        countryCode: 'US',
        isRTL: false,
      },
    ]);

    const formatter = formatCurrency();
    expect(formatter.format(1234567.89)).toBe('$1,234,567.89');
  });

  it('should handle decimal numbers', () => {
    mockRNLocalize.getLocales.mockReturnValue([
      {
        languageTag: 'en-US',
        languageCode: 'en',
        countryCode: 'US',
        isRTL: false,
      },
    ]);

    const formatter = formatCurrency();
    expect(formatter.format(0.99)).toBe('$0.99');
    expect(formatter.format(0.1)).toBe('$0.10');
  });
});
