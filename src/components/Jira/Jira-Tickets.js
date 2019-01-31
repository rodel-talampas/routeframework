// import {jiraserver} from "./Jira.js";
import { jiraSession, jiraArguments } from '../../components/Jira/Jira-config';

var Client = require('node-rest-client').Client;
var client = new Client();
var jiraResult;

// var searchURL = jiraserver+'/rest/api/2/search';
// client.post(searchURL, jiraArguments, function(searchResult, response) {
//     console.log('status code:', response.statusCode);
//     console.log('search result:', searchResult);
//     jiraResult=searchResult;
// });

export const JiraTickets = jiraResult;
