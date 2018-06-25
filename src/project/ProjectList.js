import React, { Component } from "react"
import Project from "./Project"
import "./ProjectList.css"

export default class ProjectList extends Component {

    render() {
        return (
            <div className="projectList">
                <h1 className="projectList__header">Current Construction Projects</h1>
                {
                    this.props.projects.map(p => <Project key={p.id} id={p.id} projects={p} deleteInformation={this.props.deleteInformation} />)
                }
             {/* <div>
                Total Amount of Loans:
                {
                    this.props.projects.map(a => <Project key=
                    {a.loanAmount} loanAmount={a.id} loanAmount={this.props.projects.loanAmount+this.props.projects.loanAmount}/>)
                }
            </div> */}
            </div>

        )
    }
}
