# 📱 React Native App con Firebase Firestore

Aplicación móvil desarrollada con **React Native** y **Expo SDK 54**, que utiliza **Firebase Firestore** para almacenamiento de contenido. Incluye navegación entre 3 pantallas: Inicio (lista de retos), Detalle y Reproductor multimedia.

## 🚀 Inicio rápido

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo CLI (`npm install -g @expo/cli`)
- Una cuenta de Firebase

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd NG-E_producto3
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura Firebase**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilita Firestore Database
   - Actualiza el archivo `firebaseConfig.ts` con tus credenciales:
     ```typescript
     const firebaseConfig = {
       apiKey: "tu-api-key",
       authDomain: "tu-project.firebaseapp.com",
       projectId: "tu-project-id",
       storageBucket: "tu-project.appspot.com",
       messagingSenderId: "123456789",
       appId: "tu-app-id"
     };
     ```

4. **Inicia la aplicación**
   ```bash
   npx expo start
   ```

## 📱 Ejecutar la aplicación

### Opciones de ejecución:

- **Expo Go** (recomendado para desarrollo rápido):
  - Escanea el código QR con la app Expo Go en tu dispositivo móvil

- **Emulador Android**:
  ```bash
  npx expo start --android
  ```

- **Simulador iOS** (solo macOS):
  ```bash
  npx expo start --ios
  ```

- **Navegador web**:
  ```bash
  npx expo start --web
  ```

### Comandos adicionales:

```bash
# Limpiar caché y reiniciar
npx expo start --clear

# Ejecutar en modo producción
npx expo start --no-dev

# Verificar tipos TypeScript
npx tsc --noEmit

# Ejecutar linter
npx eslint . --ext .ts,.tsx
```

## 🏗️ Estructura del proyecto

```
├── app/
│   ├── _layout.tsx          # Layout raíz de Expo Router
│   ├── index.tsx            # Pantalla de inicio (Home)
│   ├── detail.tsx           # Pantalla de detalle del reto
│   └── player.tsx           # Pantalla del reproductor multimedia
├── types/
│   └── navigation.ts        # Definiciones de tipos para datos
├── firebaseConfig.ts        # Configuración de Firebase
├── app.json                 # Configuración de Expo
└── package.json             # Dependencias del proyecto
```

## 🛠️ Tecnologías utilizadas

- **React Native** - Framework para desarrollo móvil
- **Expo SDK 54** - Plataforma de desarrollo
- **Firebase Firestore** - Base de datos NoSQL
- **Expo Router** - Sistema de navegación basado en archivos
- **TypeScript** - Tipado estático
- **React Hooks** - Gestión de estado y efectos

## 📊 Características

- ✅ **3 pantallas diferenciadas**:
  - **Inicio**: Lista infinita de retos desde Firestore
  - **Detalle**: Información completa del reto seleccionado
  - **Reproductor**: Controles multimedia simulados

- ✅ **Firebase Firestore**: Almacenamiento de contenido sin autenticación
- ✅ **Navegación fluida**: Stack Navigation entre pantallas
- ✅ **TypeScript**: Tipado completo para mejor desarrollo
- ✅ **Responsive**: Diseño adaptativo para diferentes tamaños de pantalla

## 🔧 Desarrollo

### Scripts disponibles:

```bash
# Verificar tipos
npm run type-check

# Ejecutar linter
npm run lint

# Formatear código
npm run format
```

### Configuración de Firebase

La aplicación utiliza únicamente Firestore para almacenar contenido. Los datos se almacenan en la colección `retos` con la siguiente estructura:

```typescript
interface Reto {
  id: string;
  title?: string;
  description?: string;
  content?: string;
  createdAt?: Timestamp;
}
```

## 📝 Notas importantes

- La aplicación **no incluye sistema de autenticación**
- Utiliza **navegación manual** con React Navigation (no Expo Router)
- Compatible con **Android, iOS y Web**
- Requiere configuración de Firebase antes de usar

## 🐛 Solución de problemas

### Error "unmatched route page could not be found"
- Asegúrate de que `expo-router` esté removido de `app.json`
- Reinicia el servidor con `npx expo start --clear`

### Problemas con Firebase
- Verifica que las credenciales en `firebaseConfig.ts` sean correctas
- Asegúrate de que Firestore esté habilitado en Firebase Console

### Errores de TypeScript
- Ejecuta `npx tsc --noEmit` para verificar tipos
- Los componentes usan hooks de React Navigation v6

## 📄 Licencia

Este proyecto es parte del curso de Desarrollo de Aplicaciones Móviles - UOC.

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
