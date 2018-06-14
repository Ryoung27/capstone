import React, { Component } from "react"
import Project from "./Project"
import "./ProjectList.css"

export default class ProjectList extends Component {
    render() {
        return (
            <div className="projectList">
                <h1 className="projectList__header">Projects</h1>
                {
                    this.props.projects.map(p => <Project key={p.id} project={p} />)
                }
            </div>
        )
    }
}
