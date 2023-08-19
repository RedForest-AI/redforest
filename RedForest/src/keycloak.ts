import { RNKeycloak } from '@react-keycloak/native';

import getEnvVars from './environments';
const envConfig = getEnvVars();

// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak({
  url: envConfig.keycloak.url,
  realm: envConfig.keycloak.realm,
  clientId: envConfig.keycloak.clientId,
});

export default keycloak;