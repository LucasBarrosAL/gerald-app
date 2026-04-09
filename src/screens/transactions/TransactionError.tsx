import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';

interface TransactionErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function TransactionError({
  message = 'Something went wrong',
  onRetry,
}: TransactionErrorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {onRetry && <Button title="Try again" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
});
