// import {jiraserver} from "./Jira.js";
import { session } from '../../components/Jira/Jira-config';
import {jiraserver} from "./Jira";

var Client = require('node-rest-client').Client;
var client = new Client();
var jiraResult;


session.then(cookie=>{
  console.log("CookieName:", cookie.name)
  const json = JSON.stringify(cookie);
  console.log("Json: ", json);
  return Promise.resolve("OK")
})

console.log('Header:', session.then(cookie=>{return cookie.value}));
// var searchURL = jiraserver+'/rest/api/2/search';
// client.post(searchURL, jiraArguments, function(searchResult, response) {
//     console.log('status code:', response.statusCode);
//     console.log('search result:', searchResult);
//     jiraResult=searchResult;
// });

// const

export const JiraTickets = jiraResult;
