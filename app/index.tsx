import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { db } from "../firebaseConfig";

export default function Index() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<Array<{ id: string; text?: string }>>([]);
  const [loading, setLoading] = useState(false);

  const loadItems = async () => {
    try {
      const itemsQuery = query(collection(db, "items"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(itemsQuery);
      setItems(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as { text?: string }),
        }))
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      Alert.alert("Error al cargar Firestore", message);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleAddItem = async () => {
    if (!newItem.trim()) {
      Alert.alert("Validación", "Escribe un texto para guardar en Firestore.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "items"), {
        text: newItem.trim(),
        createdAt: serverTimestamp(),
      });
      setNewItem("");
      await loadItems();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      Alert.alert("Error al guardar", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase + Expo</Text>
      <Text style={styles.subtitle}>Contenido en Firestore</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Agregar contenido</Text>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Escribe algo para guardar..."
          placeholderTextColor="#999"
        />
        <Button title={loading ? "Guardando..." : "Guardar item"} onPress={handleAddItem} disabled={loading} />
      </View>

      <Text style={styles.sectionTitle}>Items guardados</Text>
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.text ?? "Sin texto"}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No hay contenido guardado aún.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f3f4f6",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  card: {
    marginBottom: 16,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  buttonContainer: {
    flex: 1,
    marginRight: 8,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginBottom: 10,
    color: "#111",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  listItem: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  itemText: {
    fontSize: 16,
    color: "#1f2937",
  },
  emptyText: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 20,
    fontSize: 16,
  },
});
