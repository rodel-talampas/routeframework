import {jiraserver} from "./Jira.js";

var Client = require('node-rest-client').Client;
var client = new Client();
// Provide user credentials, which will be used to log in to JIRA.

var params = {
  "grant_type" : "password",
  "client_id" : "jiraserver",
  "client_secret" : "fc97b530-98e4-48c2-843a-52de740466ec",
  "username" : "apiuser@gruden.com",
  "password" : "GrudenFun987!",
  "scope" : "openid email profile"
};

var formBody = [];
for (var property in params) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(params[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

var loginArgs = {
    data: formBody,
    headers: {
        // "Content-Type": "application/json"
        "Content-Type" : "application/x-www-form-urlencoded"
    }
};
console.log(loginArgs);
//

var loginurl = "https://id.tenders.gov.au/auth/realms/finance/protocol/openid-connect/token"

// jiraserver+'/rest/auth/1/session';
var session;
var searchArgs;

client.post(loginurl, loginArgs, function(data, response){
    if (response.statusCode == 200) {
        console.log(data.access_token);
        console.log(response);
        // console.log('succesfully logged in, session:', data.session);
        session = data.session;
        searchArgs = {
          headers: {
            // Set the cookie from the session information
            // "cookie": 'JSESSIONID=' + session.value,
            "Content-Type": "application/json"
          },
          data: {
            // Provide additional data for the JIRA search. You can modify the JQL to search for whatever you want.
            //%20and%20status%20in%20('In%20Progress'%2C%20'Open')&issuetypeNames=Bug+order+by+duedate&fields=id,key,description,priority,status
            "jql": "project=ATOPS"
          }
        };
    } else {
       console.log("Login failed :(");
    }
});

export const jiraSession = session;
export const jiraArguments = searchArgs;
