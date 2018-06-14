import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Project.css"


export default class Project extends Component {
    render() {
        // function handleClick(e) {
        //     e.preventDefault();
        //     console.log("The linked was clicked",e.target)
        // }
        return (
            <div className ="card post">
                    <Link to ={`/budget/${this.props.project.id}`} className='card-text' project={this.props.project}>{this.props.project.address}</Link>
            </div>
        )
    }
}


//Make the link tag call another component
//Find out about link tag vs. onClick from Kimmy.
//Also find out about link tag directly to a certain budget.
//I converted the regular tag to a link tag.

//Originally used, may need to change around in the future.
// <div className ="card-body">
// {/* <h5>Stretch goal to add builders</h5> */}
// <a className="card-text" href="#" onClick={handleClick} id= {this.props.project.id}>
//     {this.props.project.address}
// </a>
// </div>