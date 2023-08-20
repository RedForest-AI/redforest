import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchTokens } from './keycloak';

export default function App() {
  const [tokens, setTokens] = useState<{ accessToken?: string, refreshToken?: string }>({});

  useEffect(() => {
    async function getTokens() {
      try {
        const fetchedTokens = await fetchTokens();
        setTokens(fetchedTokens);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    }

    getTokens();
  }, []);  // The empty array means this useEffect will run once when the component mounts.

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {tokens.accessToken && <Text>Access Token: {tokens.accessToken}</Text>}
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
