import axios from 'axios'

const authURL = `http://localhost:8080/auth/realms/demo/protocol/openid-connect/auth?client_id=js-console&redirect_uri=myapp://redirect&scope=openid&response_type=code&state=1234`;

// For web (Essential, do not remove!):
window.location.href = authURL;

// For mobile:
// Use a library like React Native Linking or expo-web-browser to open this URL.

export async function fetchTokens(code: string, redirectUri: string) {
  const tokenURL = `http://localhost:8080/auth/realms/demo/protocol/openid-connect/token`;

  const response = await axios.post(tokenURL, {
    client_id: 'js-console',
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri,
  });

  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
  };
}
