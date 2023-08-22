import { StyleSheet, Text, View, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Platform } from 'react-native';

import { fetchTokens } from '../../src/auth/keycloak';
import useAuthStore from '../../src/store/AuthStore';

export default function Route() {
  const params = useLocalSearchParams();
  const [isAuthenticated, setAuth] = useAuthStore((state) => [state.isAuthenticated , state.setAuth]);
  const router = useRouter();
  let redirectUri = 'com.redforest.app://auth-callback';

  useEffect(() => {
    async function getTokens(){

      if (!isAuthenticated && params) {

        // Handle differently
        if (Platform.OS === 'web') {
          redirectUri = window.location.origin + '/auth-callback';
        }

        // Fetch the token:
        const token = await fetchTokens(params.code, redirectUri);
        const decodedToken = jwtDecode(token.accessToken);
        setAuth(token, decodedToken, params.session_state, params.code)

        // Successful login, send to Home page
        router.push('/home');

      }
      else {
        Alert.alert(
          'Authentication error',
          'Keycloak authentication failed. Please try again.'
        );
        return;
      }
    }
    getTokens();
  }, []); // Important, add the empty dependency array 

  return (
    <View style={styles.container}>
        <Text>Keycloak Auth-Callback Redirect: { !params } </Text>
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