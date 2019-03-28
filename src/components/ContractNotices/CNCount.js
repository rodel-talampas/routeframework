import React from "react";
import { UncontrolledTooltip } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

import axios from 'axios';

var gradientChartOptionsConfigurationWithLegends = {
  layout: {
    padding: {
      left: 20,
      right: 20,
      top: 0,
      bottom: 0
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        },
        ticks: {
          display: true,
          padding: 20
        },
      }
    ],
    xAxes: [
      {
        display: 1,
        ticks: {
          display: true,
          padding: 20
        },
        padding: 20,
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

class ContractNotices extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chartData: [] };
  }

  componentDidMount() {

    axios.get("http://www.json-generator.com/api/json/get/cghIWRNGEO?indent=2").then(res => {
        const coin = res.data;
        let labels = coin.chartData.labels;
        let data = coin.chartData.datasets.data;
        // console.log(data.Object.values(data)[0])
        // data.forEach(element => {
        // data.push(element.data);
        //   });

        this.setState({
          chartData: {
            labels:labels,
            datasets: [
              {
                label: "Population",
                data: data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 99, 132, 0.6)"
                ],
              }
            ]
          }
        });
      });
      return Promise.resolve("OK")
    })
  }

  render() {
    return (
      <Line
        data={dashboardPanelChart.data}
        options={dashboardPanelChart.options}
      />
      <tbody>{this.state.jiratickets}</tbody>
    );
  }
}

export default ContractNotices;
