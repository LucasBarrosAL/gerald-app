import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { Colors } from '../../theme/Colors';
import { useState } from 'react';

export function HistoryScreen() {
  const [merchant, setMerchant] = useState<string>();
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for merchant..."
        onSearch={text => {
          console.log(text);
          setMerchant(text);
        }}
      />
      <Text>{merchant}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.neutral,
  },
});
