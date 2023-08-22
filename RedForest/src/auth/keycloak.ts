import axios from 'axios'
import { Platform } from 'react-native';
import * as WebBrowswer from 'expo-web-browser';

WebBrowswer.maybeCompleteAuthSession();

export function useAuth() {

  // For web (Essential, do not remove!):
  if (Platform.OS == 'web') {
    const redirect_uri = 'http://localhost:8081/auth-callback';
    const authURL = `http://10.0.0.188:8080/auth/realms/demo/protocol/openid-connect/auth?client_id=js-console&redirect_uri=${redirect_uri}&scope=openid&response_type=code&state=1234`;
    window.location.href = authURL;
  }
  
  // For mobile:
  // Use a library like React Native Linking or expo-web-browser to open this URL.
  else{
    const redirect_uri = 'com.redforest.app://auth-callback'
    const authURL = `http://10.0.0.188:8080/auth/realms/demo/protocol/openid-connect/auth?client_id=js-console&redirect_uri=${redirect_uri}&scope=openid&response_type=code&state=1234`;
    WebBrowswer.openAuthSessionAsync(authURL, redirect_uri);
    console.log("HELLO")
  }
}

export async function fetchTokens(code: string, redirectUri: string) {
  const tokenURL = `http://10.0.0.188:8080/auth/realms/demo/protocol/openid-connect/token`;

  const response = await axios({
    method: 'post',
    url: tokenURL,
    data: {
      client_id: 'js-console',
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
  };
}
