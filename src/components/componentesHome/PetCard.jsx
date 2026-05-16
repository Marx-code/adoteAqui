import React from 'react';
import { 
  View, 
  Text, 
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Tag from './Tag';
export default function PetCard({ pet }) {
  const navigation = useNavigation();
  const screenMap = {
    '1': 'DetalhePompom',
    '2': 'DetalheLuna',
  };

  const targetScreen = screenMap[pet.id] || 'DetalhePompom';

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(targetScreen)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pet.image }} style={styles.petImage} />
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>{pet.status}</Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.petName}>{pet.name}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#6B7280" />
          <Text style={styles.locationText}>{pet.location}</Text>
        </View>
        <View style={styles.tagsContainer}>
          <Tag text={pet.breed} bgColor="#E2E8F0" textColor="#334155" />
          <Tag text={pet.age} bgColor="#DBEAFE" textColor="#1E40AF" />
          <Tag text={pet.gender} bgColor="#BBF7D0" textColor="#166534" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  petImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981', // Ponto verde
    marginRight: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  cardContent: {
    padding: 20,
  },
  petName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8, // Espaçamento entre as tags
  },
});