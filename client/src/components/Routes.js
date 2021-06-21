import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Home from "./Home";
import PostJobs from "./PostJobs";
import JobSeekerDashboard from "./JobSeekerDashboard";
import Payment from "./Payment";
import Pricing from "./Pricing";
import EmployerLogin from "./Auth/EmployerLogin";
import JobSeekerLogin from "./Auth/JobSeekerLogin";
import AdminLogin from "./Auth/AdminLogin";

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/payment" component={Payment} />
          <Route path="/postjobs" component={PostJobs} />
          <Route path="/jobseeker" component={JobSeekerDashboard} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/employerlogin" component={EmployerLogin} />
          <Route path="/jobseekerlogin" component={JobSeekerLogin} />
        </Switch>
      </Router>
    </>
  );
}
