import React, {Component} from "react";
export  default  class  Create  extends  Component{



    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Login</h3>
                <form >

                    <div className="form-group">
                        <label htmlFor="sel1">Default select list</label>
                        <select className="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Username :</label>
                        <input type="text" className="form-control" />

                    </div>

                    <div className="form-group">
                        <label>Password :</label>
                        <input type="password" className="form-control" />

                    </div>

                    <div className="form-group">
                        <label>Add NIC :</label>
                        <input type="text" className="form-control" />

                    </div>

                    <div className="form-group">

                        <input type="submit" value="Register" className="btn btn-primary"/>

                    </div>
                </form>

            </div>
        );
    }
}