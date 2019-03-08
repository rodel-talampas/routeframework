import {jiraserver} from "./Jira";
import API from './JiraAPI';

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

const jiraSession = async () => {
  try {
    const response =  await API.post('rest/auth/1/session', body, headers);
    console.log ("Res:", response);

    if (response.status === 200)
      return response.data.session;
    throw new Error ("Access Denied. Error code:",response.status)
  } catch (error) {
    console.error(error)
  }
  return Promise.resolve("OK")
}

const session = jiraSession();
// const jiraresponse = session;
// const jiraresponse = async () => {
//   try {
//       const response = jiraSession();
//       console.log("Res:",response)
//       return response;
//   } catch (error) {
//     console.error(error)
//   }
// }

  // if (response.status === 200) {
  //   session = response.data.session;
  //   console.log('succesfully logged in, session:', session);
  // }


// .then(response => {
//   if (response.status === 200) {
//       session = response.data.session;
//       // searchArgs = await {
//       //   headers: {
//       //     // Set the cookie from the session information
//       //     "cookie": session.name + '=' + session.value,
//       //     "Content-Type": "application/json"
//       //   },
//       //   data: {
//       //     // Provide additional data for the JIRA search. You can modify the JQL to search for whatever you want.
//       //     //%20and%20status%20in%20('In%20Progress'%2C%20'Open')&issuetypeNames=Bug+order+by+duedate&fields=id,key,description,priority,status
//       //     "jql": "project=ATOPS"
//       //   }
//       // };
//       console.log('succesfully logged in, session:', session);
//   } else {
//      console.log("Login failed :(");
//   }
// })
// .catch(error => {
//   console.log(error);
// });

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

export { session }
