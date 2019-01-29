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
          <td className="text-left">{this.props.tickets[i].text}</td>
          <td className="td-actions text-right">
            <Button id={edit} round icon iconMini neutral color="info">
              <i className="now-ui-icons ui-2_settings-90" />
            </Button>
            <UncontrolledTooltip placement="top" target={edit} delay={0}>
              Edit Ticket
            </UncontrolledTooltip>
            <Button id={remove} round icon iconMini neutral color="danger">
              <i className="now-ui-icons ui-1_simple-remove" />
            </Button>
            <UncontrolledTooltip placement="top" target={remove} delay={0}>
              Remove
            </UncontrolledTooltip>
          </td>
        </tr>
      );
    }
    return (
      <div className="table-full-width table-responsive">
        <table className="table">
          <tbody>{ticketList}</tbody>
        </table>
      </div>
    );
  }
}

Tickets.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object)
};

export default Tickets;
