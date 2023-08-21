// import { fetchTokens } from './keycloak';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// const [tokens, setTokens] = useState<{ accessToken?: string, refreshToken?: string }>({});
// const [isAuthenticated, setIsAuthenticated] = useState(false);


// const initiateLogin = async () => {
//   const fetchedTokens = await fetchTokens('test', 'http://localhost:8081');
//   setTokens(fetchedTokens);
//   setIsAuthenticated(true);
// };

// <Text>Open up App.tsx to start working on your app!</Text>

// {isAuthenticated ? (
//   <>
//     <Text>Access Token: {tokens.accessToken}</Text>
//     <Text>Refresh Token: {tokens.refreshToken}</Text>
//   </>
// ) : (
//   <Button title="Login" onPress={initiateLogin} />
// )}

// <StatusBar style="auto" />