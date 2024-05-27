import React from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import { openURL } from 'expo-linking';
import { Buffer } from 'buffer';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spacedwog TI(Sua solução na web)</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <StatusBar style='auto'></StatusBar>
      <Button
        title="Desenvolvimento de Aplicativos"
        onPress={() => openURL('https://loja.infinitepay.io/spacedwog/ghp6758-plano-de-desenvolvimento-de-aplicativos')}
      ></Button>
      <Button
        title="Desenvolvimento de Webpage"
        onPress={() => openURL('https://loja.infinitepay.io/spacedwog/uty6194-plano-de-desenvolvimento-de-aplicativos-we')}
      ></Button>
      <Button
        title="Desenvolvimento de APP Mobile"
        onPress={() => openURL('https://loja.infinitepay.io/spacedwog/ist1936-plano-de-desenvolvimento-de-aplicativos-mo')}
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