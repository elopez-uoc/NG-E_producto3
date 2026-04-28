import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Item } from '../types/navigation';

export default function Player() {
  const { item: itemString } = useLocalSearchParams();
  const item: Item = JSON.parse(itemString as string);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 100; // Simulado

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleRewind = () => {
    setCurrentTime(Math.max(0, currentTime - 10));
  };

  const handleForward = () => {
    setCurrentTime(Math.min(duration, currentTime + 10));
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reproductor Multimedia</Text>
        <Text style={styles.subtitle}>{item.title || item.text || 'Contenido'}</Text>
      </View>

      <View style={styles.playerContainer}>
        <View style={styles.mediaDisplay}>
          <Text style={styles.mediaIcon}>🎵</Text>
          <Text style={styles.mediaTitle}>
            {item.title || item.text || 'Reproduciendo contenido'}
          </Text>
        </View>

        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(currentTime / duration) * 100}%` }
            ]}
          />
        </View>

        <View style={styles.timeDisplay}>
          <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={handleRewind}
          >
            <Text style={styles.controlIcon}>⏪</Text>
            <Text style={styles.controlLabel}>-10s</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.controlButton, styles.playButton]}
            onPress={handlePlayPause}
          >
            <Text style={styles.playIcon}>{isPlaying ? '⏸️' : '▶️'}</Text>
            <Text style={styles.controlLabel}>
              {isPlaying ? 'Pausar' : 'Reproducir'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={handleForward}
          >
            <Text style={styles.controlIcon}>⏩</Text>
            <Text style={styles.controlLabel}>+10s</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.stopButton}
          onPress={handleStop}
        >
          <Text style={styles.stopIcon}>⏹️</Text>
          <Text style={styles.stopLabel}>Detener</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Volver al detalle</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  playerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  mediaDisplay: {
    alignItems: 'center',
    marginBottom: 40,
  },
  mediaIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  mediaTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 2,
  },
  timeDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  timeText: {
    fontSize: 12,
    color: '#6b7280',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  controlButton: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  playButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlIcon: {
    fontSize: 24,
  },
  playIcon: {
    fontSize: 32,
  },
  controlLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  stopButton: {
    alignItems: 'center',
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
  },
  stopIcon: {
    fontSize: 20,
  },
  stopLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  actions: {
    padding: 20,
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
});