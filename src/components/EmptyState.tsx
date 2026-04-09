import { StyleSheet, View, Text, Image } from 'react-native';
import { Colors } from '../theme/Colors';

interface EmptyStateProps {
  title?: string;
  message?: string;
  imageUrl?: string;
}

export function EmptyState({
  title = 'Oops',
  message = 'No data here',
  imageUrl = 'https://joingerald.com/images/images/whirl.png',
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});
