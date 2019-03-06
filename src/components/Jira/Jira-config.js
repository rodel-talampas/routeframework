import {jiraserver} from "./Jira";

var Client = require('node-rest-client').Client;
var client = new Client();
// Provide user credentials, which will be used to log in to JIRA.

var body = {
    "username": "apiuser@gruden.com",
    "password": "GrudenFun987!"
}

var headers = {
  headers: {
      "Content-Type": "application/json"
  }
}

var loginArgs = {
    data: body,
    headers
};

console.log(loginArgs);
//
var loginurl = jiraserver+'/rest/auth/1/session';


function JiraLogin()
const axios = require('axios');
var callx = axios.post(loginurl, body, headers).then(response => {
    if (response.status === 200) {
        console.log('succesfully logged in, session:', response.data.session);
        session = response.data.session;
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
    return "Rodel"
  })
  .catch(error => {
    console.log(error);
  });

// client.post(loginurl, loginArgs, function(data, response){
//         if (response.statusCode === 200) {
//             console.log('succesfully logged in, session:', data.session);
//             session = data.session;
//             searchArgs = {
//               headers: {
//                 // Set the cookie from the session information
//                 "cookie": session.name + '=' + session.value,
//                 "Content-Type": "application/json"
//               },
//               data: {
//                 // Provide additional data for the JIRA search. You can modify the JQL to search for whatever you want.
//                 //%20and%20status%20in%20('In%20Progress'%2C%20'Open')&issuetypeNames=Bug+order+by+duedate&fields=id,key,description,priority,status
//                 "jql": "project=ATOPS"
//               }
//             };
//             return {"session": data.session, "arguments": searchArgs}
//         } else {
//            console.log("Login failed :(");
//         }
//     });
//
//   console.log("RESPONSE: ". req);

console.log("Session : ", callx);
export { session, searchArgs }
