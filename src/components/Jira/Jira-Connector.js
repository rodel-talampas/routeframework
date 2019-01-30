import {jiraserver,jirabase64} from "./Jira.js";

var JiraClient = require('jira-connector');
var cookieStore = require('tough-cookie-file-store');
var CookieJar = require('tough-cookie').CookieJar;
var jar = new CookieJar(new cookieStore('./cookie.json'));

var jiraclient = new JiraClient( {
    host: jiraserver,
    basic_auth: {
        base64: jirabase64
    },
    cookie_jar: jar
});

export default jiraclient;
