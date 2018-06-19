import React, { Component } from "react"
import Project from "./Project"
import "./ProjectList.css"

export default class ProjectList extends Component {

    // delete = function() {
    //     this.props.deleteInformation(this.props.posts.id);
    // }.bind(this);

    render() {
        return (
            <div className="projectList">
                <h1 className="projectList__header">Projects</h1>
                {
                    <Project key={this.props.projects.id} projects={this.props.projects.id} />
                }
            </div>
        )
    }
}