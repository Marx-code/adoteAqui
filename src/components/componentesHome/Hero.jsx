import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Hero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.title}>
        Encontre seu{'\n'}novo amigo
      </Text>
      <Text style={styles.subtitle}>
        Centenas de pets estão esperando por um lar cheio de amor.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  hero: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#111827',
    lineHeight: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
});