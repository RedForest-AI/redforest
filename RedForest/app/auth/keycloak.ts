import axios from 'axios'
import { Platform } from 'react-native';

// // import { View, Text } from "react-native"
// import useHistory from "react-router-dom";

// export default function Home() {
//     console.log("Auth Request once")
    
//     // const history = useHistory();

//     // useEffect(() => {
//     //   // Check if the user has already been redirected for authentication
//     //   if (!localStorage.getItem("authRedirected")) {
//     //     if (Platform.OS === 'web') {
//     //       window.location.href = authURL;
//     //       localStorage.setItem("authRedirected", "true");
//     //     }
//     //   } else {
//     //     // If user has already been redirected before, navigate them to the dashboard or a suitable default route
//     //     history.push("/dashboard");
//     //   }
//     // }, []);
  

//     return null;
//   }

const redirect_uri = 'http://localhost:8081/auth-callback';

export function useAuth() {
  const authURL = `http://10.0.0.188:8080/auth/realms/demo/protocol/openid-connect/auth?client_id=js-console&redirect_uri=${redirect_uri}&scope=openid&response_type=code&state=1234`;

  // For web (Essential, do not remove!):
  if (Platform.OS == 'web') {
    window.location.href = authURL;
  }
  
  // For mobile:
  // Use a library like React Native Linking or expo-web-browser to open this URL.
}

export async function fetchTokens(code: string, redirectUri: string) {
  const tokenURL = `http://10.0.0.188:8080/auth/realms/demo/protocol/openid-connect/token`;

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
