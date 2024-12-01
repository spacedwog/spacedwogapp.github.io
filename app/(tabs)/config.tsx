import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { openURL } from 'expo-linking';

export default function TabConfigScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Spacedwog TI(Sua solução na web)</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/config.tsx" />
      <Button
        title="Configuração"
        onPress={() => openURL('https://wa.me/5511991719629')}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});