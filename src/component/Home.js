import React, { Component } from "react";

class Home extends Component{
    handleRoute = () =>{
        this.props.history.push('/user')
    }
    render(){
        return(
            <div className="container p-3">
            <h2 > Welcome to the App</h2>

            <div className="mt-5">
                Please cleck <span className="edit-link" onClick={this.handleRoute}>Here </span> for User List
            </div>
        </div>
        )
       
    }
}
export default Home;