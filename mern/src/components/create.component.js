import React, {Component} from "react";
import axios from "axios";
export  default  class  Create  extends  Component{

    state={
            pname: "",
            bname: "",
            nic: ""
    }


    onChangePName = (e) => {
        this.setState({
            pname: e.target.value
        });
    }

    onChangeBName = (e) => {
        this.setState({
            bname: e.target.value
        });
    }

    onChangeNIC = (e) => {
        this.setState({
            nic: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            pname : this.state.pname,
            bname : this.state.bname,
            nic: this.state.nic
        };
        axios.post('http://localhost:4000/business/add', obj).then(res => console.log(res.data));
        this.setState({
            pname: '',
            bname: '',
            nic : ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add Business</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Add Name :</label>
                        <input type="text" className="form-control" value={this.state.pname} onChange={this.onChangePName}/>

                    </div>

                    <div className="form-group">
                        <label>Add B Name :</label>
                        <input type="text" className="form-control" value={this.state.bname} onChange={this.onChangeBName}/>

                    </div>

                    <div className="form-group">
                        <label>Add NIC :</label>
                        <input type="text" className="form-control" value={this.state.nic} onChange={this.onChangeNIC}/>

                    </div>

                    <div className="form-group">

                        <input type="submit" value="Register" className="btn btn-primary"/>

                    </div>
                </form>
            </div>
        );
    }
}