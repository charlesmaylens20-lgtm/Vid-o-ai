import React from 'react'; import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() { return (  Video AI
<Text style={styles.subtitle}>
    Create videos with AI
  </Text>

  <Text style={styles.label}>Describe your video</Text>

  <TextInput
    style={styles.input}
    placeholder="Write your prompt..."
    placeholderTextColor="#888"
    multiline
  />

  <TouchableOpacity style={styles.imageButton}>
    <Text style={styles.buttonText}>+ Add Image</Text>
  </TouchableOpacity>

  <Text style={styles.label}>Duration</Text>

  <View style={styles.durationRow}>
    <TouchableOpacity style={styles.duration}>
      <Text>5s</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.duration}>
      <Text>10s</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.duration}>
      <Text>15s</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.generateButton}>
    <Text style={styles.generateText}>Generate Video</Text>
  </TouchableOpacity>
</View>
); }
const styles = StyleSheet.create({ container: { flex: 1, padding: 24, paddingTop: 70, backgroundColor: '#ffffff', }, title: { fontSize: 32, fontWeight: 'bold', }, subtitle: { fontSize: 16, color: '#777', marginTop: 8, marginBottom: 35, }, label: { fontSize: 17, fontWeight: '600', marginBottom: 10, }, input: { height: 130, borderWidth: 1, borderColor: '#ddd', borderRadius: 16, padding: 15, fontSize: 16, textAlignVertical: 'top', marginBottom: 18, }, imageButton: { height: 55, borderWidth: 1, borderColor: '#ddd', borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginBottom: 28, }, buttonText: { fontSize: 16, fontWeight: '600', }, durationRow: { flexDirection: 'row', gap: 10, marginBottom: 30, }, duration: { flex: 1, height: 50, borderWidth: 1, borderColor: '#ddd', borderRadius: 12, alignItems: 'center', justifyContent: 'center', }, generateButton: { height: 58, backgroundColor: '#111111', borderRadius: 15, alignItems: 'center', justifyContent: 'center', }, generateText: { color: '#ffffff', fontSize: 17, fontWeight: 'bold', }, });
