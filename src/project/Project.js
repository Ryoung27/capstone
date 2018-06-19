import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Project.css"


export default class Project extends Component {
    render() {
        return (
            <div className ="card post">
                    <Link to ={`/budget/${this.props.project.id}`} className='card-text' project={this.props.project}>{this.props.project.address}</Link>

                                           <button type ="button" className="btn btn-primary" onClick={this.delete}>
                Delete
              </button>
            </div>
        )
    }
}
