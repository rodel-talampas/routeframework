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
  dashboardPanelChart,dashboardPanelSonChart,serverCPUChart,
  dashboardShippedProductsChart,serverDiskChart,
  dashboardAllProductsChart,databaseChart,
  dashboard24HoursPerformanceChart
} from "../../variables/charts.js";

import { tickets, tasks } from "../../variables/general.js";


class MonDashboard extends React.Component {

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
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Tenders</CardCategory>
                  <CardTitle tag="h4">CPU Usage</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={serverCPUChart.data}
                      options={serverCPUChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Tenders</CardCategory>
                  <CardTitle tag="h4">Disk Usage</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={serverDiskChart.data}
                      options={serverDiskChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Tenders</CardCategory>
                  <CardTitle tag="h4">Database Usage</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={databaseChart.data}
                      options={databaseChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days" }]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MonDashboard;
