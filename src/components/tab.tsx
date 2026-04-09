import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../theme/Colors';

interface TabProps {
  name: string;
  selected: boolean;
  onPress: () => void;
}

export function Tab({ name, selected, onPress }: TabProps) {
  return (
    <Pressable
      style={[
        styles.container,
        selected ? styles.optionSelected : styles.optionUnselected,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          selected ? styles.textSelected : styles.textUnselected,
        ]}
      >
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionSelected: {
    backgroundColor: Colors.white,
  },
  optionUnselected: {
    backgroundColor: Colors.ctaBackground,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
  textSelected: {
    color: Colors.danger,
  },
  textUnselected: {
    color: Colors.text,
  },
});
