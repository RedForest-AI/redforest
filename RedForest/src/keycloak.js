import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'demo',
  clientId: 'js-console'
});

try {
    const authenticated = await keycloak.init({ onLoad: 'login-required'});
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}

export default keycloak;
