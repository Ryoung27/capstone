import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Project.css"


export default class Project extends Component {

    delete = function (event) {
        this.props.deleteInformation(event.target.id)
    }.bind(this)

        handleFieldChange = (evt) => {
            const stateToChange = {}
            stateToChange[evt.target.id] = evt.target.value
            this.setState(stateToChange)
        }


    render() {
        return (
            <div id="top-card">
                <div className="card post">
                    <Link to={`/budget/${this.props.projects.id}`} className='card-text' >{this.props.projects.address} </Link>
                    <button type="button" className="btn btn-primary, color-try" onClick={this.delete} id={this.props.projects.id}>
                        Delete
                            </button>
                <div>
                    {this.props.projects.projectType}
                </div>
                </div>
            </div>
        )
    }
}


//http://localhost:5001/projects_materials?projectId=2&_expand=project&_expand=material

