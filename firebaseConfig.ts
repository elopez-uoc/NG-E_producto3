import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7i_V7VbK1JQsOIt3hzn_kTByhmhHXj3w",
  authDomain: "nge-producto2.firebaseapp.com",
  projectId: "nge-producto2",
  storageBucket: "nge-producto2.firebasestorage.app",
  messagingSenderId: "937779816336",
  appId: "1:937779816336:web:0fba72d7fd3235a7d53515",
  measurementId: "G-2QLSF19JES"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);

// Función para obtener la ruta correcta de imágenes
export const getImageUrl = (path: string | undefined): string | null => {
  if (!path) return null;
  
  // Si es una ruta relativa local, devolverla para que require() la procese
  return path;
};

// Función para cargar imágenes locales con require
export const requireImage = (path: string | undefined) => {
  if (!path) return null;
  
  try {
    // Las imágenes están en public/assets/photos
    // La ruta en Firestore es: public/assets/photos/nombre.jpg
    // Necesitamos hacer require desde la raíz del proyecto: ./public/assets/photos/nombre.jpg
    return (`./${path}`);
  } catch (error) {
    console.warn(`No se pudo cargar la imagen: ${path}`, error);
    return null;
  }
};

export default app;
