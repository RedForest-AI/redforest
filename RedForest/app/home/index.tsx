import { StyleSheet, Text, View, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import useAuthStore from '../../src/store/AuthStore';


export default function Page() {
  const [decodedToken] = useAuthStore((state) => [state.decodedToken]);

  return (
    <View style={styles.container}>
      <Text>Logged IN!</Text>
      <Text>Username: { decodedToken.preferred_username } </Text>
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