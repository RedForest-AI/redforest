import Constants from 'expo-constants';

interface KeycloakConfig {
    url: string;
    realm: string;
    clientId: string;
}

interface EnvConfig {
    keycloak: KeycloakConfig;
}

const ENV: { [name: string] : EnvConfig} = {
    dev: {
        keycloak: {
            url: 'http://10.66.10.182:8080',
            realm: 'dev',
            clientId: 'js-console',
        }
    },
    staging: {
        keycloak: {
            url: 'http://localhost:8080',
            realm: 'dev',
            clientId: 'js-console',
        }
    },
    prod: {
        keycloak: {
            url: 'http://localhost:8080',
            realm: 'dev',
            clientId: 'js-console',
        }
    }
}

function getEnvVars(): EnvConfig {
    if (__DEV__) {
        return ENV.dev;
    } else if (Constants.releaseChannel === 'staging') {
        return ENV.staging;
    } else if (Constants.releaseChannel === 'prod') {
        return ENV.prod;
    }
    else {
        return ENV.dev;
    }
}

export default getEnvVars
