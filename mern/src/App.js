import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import AttComponent from "./components/att.component";
import OtComponent from "./components/ot.component";
import LeaveComponent from "./components/leave.component";
import FreportComponent from "./components/freport.component";


export default class App extends Component {
    render() {
        return(
            <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to={'/'} className="navbar-brand">React Crud Example</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/'}  className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/create'}  className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/index'}  className="nav-link">Index</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/att'}  className="nav-link">Attendance</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/leaves'}  className="nav-link">Leaves</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/ot'}  className="nav-link">Over Time</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/freports'}  className="nav-link">Field Reports</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <h2>Welcome Agrarian Developmet Department</h2>
                <Switch>
                    <Route exact path ='/create' component={Create}/>
                    <Route exact path ='/edit/:id' component={Edit}/>
                    <Route exact path ='/index' component={Index}/>
                    <Route exact path ='/att' component={AttComponent}/>
                    <Route exact path ='/leaves' component={LeaveComponent}/>
                    <Route exact path ='/ot' component={OtComponent}/>
                    <Route exact path ='/freports' component={FreportComponent}/>
                </Switch>
            </div>
            </Router>
        );
    }
}
