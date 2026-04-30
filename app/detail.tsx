import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { BasketballPlayer } from '../types/navigation';

export default function Detail() {
  const { item: itemString } = useLocalSearchParams();
  const item: BasketballPlayer = JSON.parse(itemString as string);

  const handlePlayPress = () => {
    router.push({
      pathname: '/video',
      params: { item: JSON.stringify(item) }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.subtitle}>{item.equipo} • {item.posicion}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información del Jugador</Text>
          <Text style={styles.infoText}>🏀 Equipo: {item.equipo}</Text>
          <Text style={styles.infoText}>📍 Posición: {item.posicion}</Text>
          <Text style={styles.infoText}>📏 Altura: {item.altura}</Text>
          <Text style={styles.infoText}>🎂 Edad: {item.edad} años</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estadísticas Principales</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{item.pPP}</Text>
              <Text style={styles.statLabel}>PPP</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{item.aPP}</Text>
              <Text style={styles.statLabel}>APP</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{item.rPP}</Text>
              <Text style={styles.statLabel}>RPP</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{item.porcentajeTiros}%</Text>
              <Text style={styles.statLabel}>FG%</Text>
            </View>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={handlePlayPress}
          >
            <Text style={styles.playButtonText}>Ver Vídeo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>← Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#9ca3af',
  },
  actions: {
    marginTop: 32,
  },
  playButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  playButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#6b7280',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});