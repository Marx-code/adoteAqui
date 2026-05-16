import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Hero from '../components/componentesHome/Hero';
import PetCard from '../components/componentesHome/PetCard';
import Tag from '../components/componentesHome/Tag';

const pets = [
  {
    id: '1',
    name: 'Pompom',
    location: 'São Paulo, SP',
    breed: 'Golden Retriever',
    age: '2 anos',
    gender: 'Macho',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80&w=800',
    status: 'Para adoção',
  },
  {
    id: '2',
    name: 'Luna',
    location: 'Campinas, SP',
    breed: 'SRD',
    age: '8 meses',
    gender: 'Fêmea',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    status: 'Para adoção',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PetCard pet={item} />}
        ListHeaderComponent={() => <Hero />}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingBottom: 100, 
  },
  cardsContainer: {
    paddingHorizontal: 20,
  }
});