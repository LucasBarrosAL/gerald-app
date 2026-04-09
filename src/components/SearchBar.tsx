import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from '@react-native-vector-icons/feather';
import { Colors } from '../theme/Colors';

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onSearch?: (text: string) => void;
  debounceDelay?: number;
}

export function SearchBar({
  placeholder = 'Search...',
  onChangeText,
  onSearch,
  debounceDelay = 500,
}: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch?.(searchText);
    }, debounceDelay);

    return () => clearTimeout(timeout);
  }, [searchText, debounceDelay, onSearch]);

  const handleChangeText = (text: string) => {
    setSearchText(text);
    onChangeText?.(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconButton}>
        <Icon name="search" size={20} color="gray" />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        value={searchText}
        onChangeText={handleChangeText}
        accessibilityLabel="input"
        accessibilityHint="Press to search by merchant name"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
    marginLeft: 8,
  },
  iconButton: {
    padding: 8,
  },
});
