import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelChart, PanelHeader, Stats, CardCategory, Tasks , Tickets} from "../../components";

import { JiraTickets } from '../../components/Jira/Jira-Tickets';

import {
  dashboardPanelChart,dashboardPanelSonChart,dashboardPanelCombineChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "../../variables/charts.js";

import { tickets, tasks } from "../../variables/general";


class AppDashboard extends React.Component {

// $url = 'https://&lt;oururl&gt;.jira.com/rest/api/2/search?jql=project%20%3D%20&lt;ourteam&gt;%20AND%20status%20in%20(%22In%20Analysis%22%2C%20%22In%20Development%22)%20ORDER%20BY%20priority%20DESC%2C%20status%20DESC&amp;fields%3Did,key,summary,priority,status,project,assignee';
//jql=project=ATOPS%20and%20status%20in%20("In%20Progress"%2C%20"Open")&issuetypeNames=Bug+order+by+duedate&fields=id,key,description,priority,status
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <PanelHeader
          size="sm"
        />
        <div className="content">
          <Row>
            <Col xs={14} md={6}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>2018 CNs</CardCategory>
                  <CardTitle tag="h4">Monthly</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                      <Line
                        data={dashboardPanelChart.data}
                        options={dashboardPanelChart.options}
                      />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons arrows-1_refresh-69",
                    t: "Just Updated"}]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={14} md={6}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>2018 SONs</CardCategory>
                  <CardTitle tag="h4">Monthly</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                      <Line
                        data={dashboardPanelSonChart.data}
                        options={dashboardPanelSonChart.options}
                      />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons arrows-1_refresh-69",
                    t: "Just Updated"}]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={14} md={6}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>2018 CNs and SONs</CardCategory>
                  <CardTitle tag="h4">Monthly</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                      <Bar
                        data={dashboardPanelCombineChart.data}
                        options={dashboardPanelCombineChart.options}
                      />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons arrows-1_refresh-69",
                    t: "Just Updated"}]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardHeader>
                  <CardCategory>Tenders Ticket List</CardCategory>
                  <CardTitle tag="h4">Bugs</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>No</th>
                        <th>Severity</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <Tickets tickets={tickets} />
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AppDashboard;