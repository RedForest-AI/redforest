import { StyleSheet, Text, View, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useAuth } from '../src/auth/keycloak';


export default function Page() {

  const initiateLogin = async () => {
    useAuth();
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Login" onPress={initiateLogin} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});