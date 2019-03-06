// import {jiraserver} from "./Jira.js";
import { session, searchArgs } from '../../components/Jira/Jira-config';
import {jiraserver} from "./Jira";

var Client = require('node-rest-client').Client;
var client = new Client();
var jiraResult;

console.log('Header:', searchArgs);

// var searchURL = jiraserver+'/rest/api/2/search';
// client.post(searchURL, jiraArguments, function(searchResult, response) {
//     console.log('status code:', response.statusCode);
//     console.log('search result:', searchResult);
//     jiraResult=searchResult;
// });

export const JiraTickets = jiraResult;
