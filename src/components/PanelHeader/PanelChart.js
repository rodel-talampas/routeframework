import React from "react";

class PanelChart extends React.Component {
  render() {
    return (
      <div
        className={
          "panel-chart " +
          (this.props.size !== undefined
            ? "panel-header-" + this.props.size
            : "")
        }
      >
        {this.props.content}
      </div>
    );
  }
}

export default PanelChart;
