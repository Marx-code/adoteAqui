import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Tag({ text, bgColor, textColor }) {
  return (
    <View style={[styles.tag, { backgroundColor: bgColor }]}>
      <Text style={[styles.tagText, { color: textColor }]}>
        {text}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
});