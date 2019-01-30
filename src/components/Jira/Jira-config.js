import {jiraserver,jirabase64} from "./Jira.js";

var Client = require('node-rest-client').Client;
var client = new Client();
// Provide user credentials, which will be used to log in to JIRA.
var loginArgs = {
    data: {
        "username": "apiuser@gruden.com",
        "password": "GrudenFun987!"
    },
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
};
console.log(loginArgs);
//
var loginurl = jiraserver+'/rest/auth/1/session';
var session;
var searchArgs;

client.post(loginurl, loginArgs, function(data, response){
    if (response.statusCode == 200) {
        console.log('succesfully logged in, session:', data.session);
        session = data.session;
        searchArgs = {
          headers: {
            // Set the cookie from the session information
            "cookie": session.name + '=' + session.value,
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
