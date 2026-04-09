import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../theme/Colors';
import { HomeScreenNavigationProp } from '../../stack/RootStack';
import { Button } from '../../components/Button';

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gerald App</Text>
      </View>
      <View style={styles.content}>
        <Button
          title="Transactions history"
          onPress={() => {
            navigation.navigate('Transactions');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral,
  },
  header: {
    height: 200,
    width: '100%',
    backgroundColor: Colors.accent,
    justifyContent: 'flex-end',
    padding: 16,
    paddingBottom: 32,
  },
  title: { fontSize: 40, fontWeight: 700 },
  content: {
    flex: 1,
    padding: 16,
    paddingTop: 64,
  },
});
