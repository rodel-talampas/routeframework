import React from "react";
import { UncontrolledTooltip } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

import { Button, Checkbox } from "../../components";

import { session } from '../Jira/Jira-config';
import API from '../Jira/JiraAPI';
import axios from 'axios';
class Tickets extends React.Component {

  constructor(props) {
    super(props);
    this.state = { jiratickets: [], headers: null };
  }

  componentDidMount() {
    session.then(cookie=>{
      const json = JSON.stringify(cookie);
      console.log("Json: ", json);
      const headers = {
        headers: {
          cookie : cookie.name + "=" + cookie.value,
          "Content-Type": "application/json"
        }
      };
      const body = {
        "jql": "project=ATCO and status in ('In Progress','Open') order by priority desc, duedate asc&fields=id,key,description,priority,status,issuetype"
      }

      const response =  axios.get('https://06gfkxap49.execute-api.ap-southeast-2.amazonaws.com/dev/getATCO').then(response=>{
        console.log("Query:", response)

        var ticketList = [];
        var number;
        var edit;
        var remove;

        for (var i = 0; i < response.data.length; i++) {
          ticketList.push(
            <tr key={i}>
            <td className="text-left">{response.data[i].key}</td>
            <td className="text-left">{response.data[i].type}</td>
            <td className="text-left">{response.data[i].priority}</td>
            <td className="text-left">{response.data[i].status}</td>
            </tr>
          );
        }

        this.setState((state)=>{
          return { jiratickets: ticketList}
        })

        console.log("Query:", ticketList)
      });
      return Promise.resolve("OK")
    })
  }

  render() {
    return (
      <tbody>{this.state.jiratickets}</tbody>
    );
  }
}
export default Tickets;
