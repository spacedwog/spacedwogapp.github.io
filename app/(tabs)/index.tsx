import React from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { StatusBar } from 'expo-status-bar';
import {Buffer} from 'buffer';
import { openURL } from 'expo-linking';


export default function TabOneScreen() {
  global.Buffer = Buffer;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spacedwog TI(Sua solução na web)</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <StatusBar style='auto'></StatusBar>
      <Button
        title="Serviço-1"
        onPress={() => openURL('https://loja.infinitepay.io/spacedwog/ist1936-plano-de-desenvolvimento-de-aplicativos-mo')}
      ></Button>
      <Button
        title="Serviço-2"
        onPress={() => openURL('https://loja.infinitepay.io/spacedwog/uty6194-plano-de-desenvolvimento-de-aplicativos-we')}
      ></Button>
      <Button
        title="Serviço-3"
        onPress={() => openURL('https://loja.infinitepay.io/spacedwog/ghp6758-plano-de-desenvolvimento-de-aplicativos')}
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