import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ReactNativeKeycloakProvider } from '@react-keycloak/native';

import Login from './Login';
import keycloak from './keycloak';

// Wrap everything inside ReactNativeKeycloakProvider
export default function App() {
  return (<ReactNativeKeycloakProvider
    authClient={keycloak}
    initOptions={{
      redirectUri: 'myapp://Homepage',
      // if you need to customize "react-native-inappbrowser-reborn" View you can use the following attribute
      inAppBrowserOptions: {
        // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
        // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
      },
    }}
  >
    <Login />
  </ReactNativeKeycloakProvider>
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
