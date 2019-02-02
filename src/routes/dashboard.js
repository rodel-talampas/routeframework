import Dashboard from "../views/Dashboard/Dashboard.js";
import AppDashboard from "../views/Application/Dashboard.js";
import MonDashboard from "../views/Monitor/Dashboard.js";

var dashRoutes = [
  {
    path: "/application",
    name: "Application Dashboard",
    icon: "design_app",
    component: AppDashboard
  },
  {
    path: "/monitor",
    name: "Monitoring Dashboard",
    icon: "design_app",
    component: MonDashboard
  },
  { redirect: true, path: "/", pathTo: "/application", name: "Application Dashboard" }
];
export default dashRoutes;
