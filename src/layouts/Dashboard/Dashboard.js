import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import { Header, Footer, Sidebar } from "../../components";

import dashboardRoutes from "../../routes/dashboard.js";

import { keycloak } from '../../components/Keycloak/keycloak-config';
// import { jiraclient } from '../../components/Jira/Jira-Connector';

var ps;

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false, tokenParsed: null };
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    keycloak.init({onLoad: 'login-required'}).then(authenticated => { this.setState((state) => {
        return  { keycloak: keycloak, authenticated: authenticated, tokenParsed: keycloak.tokenParsed }
      })
    })
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  render() {
    if(this.state.keycloak) {
      if(this.state.authenticated)
        return (
            <div className="wrapper">
              <Sidebar {...this.props} routes={dashboardRoutes} />
              <div className="main-panel" ref="mainPanel">
                <Header {...this.props} />
                <Switch>
                  {dashboardRoutes.map((prop, key) => {
                    if (prop.collapse) {
                      return prop.views.map((prop2, key2) => {
                        return (
                          <Route
                            path={prop2.path}
                            component={prop2.component}
                            key={key2}
                          />
                        );
                      });
                    }
                    if (prop.redirect)
                      return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
                    return (
                      <Route path={prop.path} component={prop.component} key={key} />
                    );
                  })}
                </Switch>
                <Footer fluid />
              </div>
            </div>
        );
      }
      else {
        return (
          <div className="wrapper">
          <Sidebar {...this.props} routes={dashboardRoutes} />
          </div>
        )
      }
    }
}

export default Dashboard;
