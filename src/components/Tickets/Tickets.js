import React from "react";
import { UncontrolledTooltip } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

import { Button, Checkbox } from "../../components";

class Tickets extends React.Component {
  render() {
    var ticketList = [];
    var number;
    var edit;
    var remove;

    for (var i = 0; i < this.props.tickets.length; i++) {
      number = "checkbox" + i;
      edit = "edit" + i;
      remove = "remove" + i;
      ticketList.push(
        <tr key={i}>
          <td className="text-left">{this.props.tickets[i].number}</td>
          <td className="text-left">{this.props.tickets[i].severity}</td>
          <td className="text-left">{this.props.tickets[i].description}</td>
          <td className="td-actions text-right">
            <Button id={edit} round icon iconMini neutral color="info">
              <i className="now-ui-icons ui-2_settings-90" />
            </Button>
            <UncontrolledTooltip placement="top" target={edit} delay={0}>
              Edit Ticket
            </UncontrolledTooltip>
          </td>
        </tr>
      );
    }
    return (
      <tbody>{ticketList}</tbody>
    );
  }
}

Tickets.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object)
};

export default Tickets;
