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
            <div id="top-card" className="col-4">
                <div className="card post">
                    <Link to={`/budget/${this.props.projects.id}`} className='card-text' >{this.props.projects.address} </Link>
                    <div>
                    {this.props.projects.projectType}
                    </div>
                    <div>
                    Loan Amount: {this.props.projects.loanAmount}
                    </div>
                    <div>
                    Builder: {this.props.projects.builder}
                    </div>
                    <button type="button" className="btn, color-try" onClick={this.delete} id={this.props.projects.id}>
                    Delete
                    </button>
                </div>
            </div>
        )
    }
}



