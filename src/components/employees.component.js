import React, {Component} from 'react';

class EmployeesComponent extends Component {
    render() {
        return (
            <div>
                <p>Emp Table Here</p>
                <div className="text-center">
                <button className="btn btn-warning"><b>Print Report</b></button>
                </div>
            </div>
        );
    }
}

export default EmployeesComponent;