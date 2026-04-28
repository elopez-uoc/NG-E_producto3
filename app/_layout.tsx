import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#1f2937',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Inicio',
          headerShown: false, // Ocultamos el header porque Home tiene su propio header
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: 'Detalle',
        }}
      />
      <Stack.Screen
        name="player"
        options={{
          title: 'Reproductor',
        }}
      />
    </Stack>
  );
}
