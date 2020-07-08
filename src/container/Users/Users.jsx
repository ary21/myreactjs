import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Users.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FormUserComponent from "../../component/user/FormUsersComponent";
import UsersComponent from "../../component/user/UsersComponent";
import TasksComponent from "../../component/user/TasksComponent";

class Users extends Component {
    render() {
        return(<Router>
            <div className="App">
              <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                  <h3 className="navbar-brand">Test</h3>
                  
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to={"/users"}>All Users</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/form-user"}>Register</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/form-user"}>Assign</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/form-user"}>Unassign</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/tasks"}>Tasks</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
        
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <Switch>
                      <Route exact path='/' component={UsersComponent} />
                      <Route path="/users" component={UsersComponent} />
                      <Route path="/form-user" component={FormUserComponent} />
                      <Route path="/tasks" component={TasksComponent} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </Router>
        )
    }
}

export default Users;