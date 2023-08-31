import { StyleSheet, Text, View, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import * as Linking from 'expo-linking';

import { useAuth } from '../src/auth/keycloak';
import useAuthStore from '../src/store/AuthStore';

export default function Page() {
  const [isAuthenticated] = useAuthStore((state) => [state.isAuthenticated]);
  const url = Linking.useURL();

  useEffect(() => {
      console.log(url);
  }, [url]);

  if (!isAuthenticated) {
    useAuth();
  }
  else {
    return <Redirect href="/home" />
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
