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
                    this.props.projects.map(p => <Project key={p.id} id={p.id} projects={p} deleteInformation={this.props.deleteInformation} />)
                }
            </div>
        )
    }
}



{/* <div className="col content col-sm-6">
<BudgetResultsList materials={this.state.materials} projects_materials={this.state.filteredProject} pm={this.state.project_materials} deleteInformation={this.deleteInformation} displayAll ={this.displayAll} />
</div> */}