import { StyleSheet, Text, View, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { fetchTokens, useAuth } from './auth/keycloak'


export default function Page() {

  const [tokens, setTokens] = useState<{ accessToken?: string, refreshToken?: string }>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initiateLogin = async () => {
    useAuth();

    // const result = await fetchTokens('redforest', 'http://localhost:8081/auth-callback');
    // console.log(result);
    // setTokens(result);
    // setIsAuthenticated(true);

  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      {isAuthenticated ? (
        <>
          <Text>Access Token: {tokens.accessToken}</Text>
          <Text>Refresh Token: {tokens.refreshToken}</Text>
        </>
      ) : (
        <Button title="Login" onPress={initiateLogin} />
      )}
      
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