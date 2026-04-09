import * as RNLocalize from 'react-native-localize';

export const formatCurrency = () => {
  const userLocale = RNLocalize.getLocales()[0]?.languageTag || 'en-US';

  return new Intl.NumberFormat(userLocale, {
    style: 'currency',
    currency: 'USD',
  });
};
