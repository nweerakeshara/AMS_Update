import React, {Component} from 'react';

class AttComponent extends Component {
    render() {
        return (
            <div>
                <h1>Atendance Here</h1>
                <div className="text-center">
                <button className="btn btn-warning"><b>Print Report</b></button>
                </div>
            </div>
        );
    }
}

export default AttComponent;