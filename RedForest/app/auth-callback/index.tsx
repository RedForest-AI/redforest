import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';

import { fetchTokens } from '../../src/auth/keycloak';
import useAuthStore from '../../src/store/AuthStore';

export default function Route() {
  const result = useLocalSearchParams();
  const [session_state, code, setSessionState, setCode] = useAuthStore((state) => [state.sessionState, state.code, state.setSessionState, state.setCode]);

  useEffect(() => {
    async function getTokens(){

      if (!code) {
        console.log(result);
        if (!result) {
          console.log("No result");
        }
        else {
          console.log(result);
          
          // Update the data
          setCode(result.code);
          setSessionState(result.session_state);
  
          // Fetch the token:
          const token = await fetchTokens(result.code, 'http://localhost:8081/auth-callback');
          // console.log(token);
          // setTokens(result);
          // setIsAuthenticated(true);
        }
      }
    }
    getTokens();
  }, []); // Important, add the empty dependency array 

  return (
    <View style={styles.container}>
        <Text>Logged IN!</Text>
        <Text>Session State: { session_state }</Text>
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