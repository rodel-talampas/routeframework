import axios from 'axios';
import {jiraserver} from "./Jira";

var instance = axios.create({
  baseURL: jiraserver
});

instance.defaults.headers.common = {};  

export default instance;
