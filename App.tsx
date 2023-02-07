import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Route from './Components/Router/ContainerScreen';
export default function App() {
  return (
    <View style={styles.general}>
      <Route />
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    backgroundColor: '#0f0e17',
    flex: 1,
  },
});
