angular.module('keycloak', []);


var keycloakConfig = {
    "url": "https://id.tenders.gov.au/auth",
    "realm": "finance",
    "clientId": "frontend",
    "credentials": {
        "secret": "3a06823e-aca2-4c47-9530-7fa77801bba0"
    }
};
var keycloak = Keycloak(keycloakConfig);
keycloak.init({
    onLoad: 'login-required'
}).success(function () {
    //User has logged in
});
