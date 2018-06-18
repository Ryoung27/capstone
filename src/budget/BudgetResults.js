import React, { Component } from "react"
//import ProjectList from "../project/ProjectList"
import BudgetResultsList from "./BudgetResultsList"
import "./BudgetResults.css"
//I need to update the fetch to follow the right link on click.
export default class BudgetResults extends Component {
    state = {
        projects_materials: [],
        projects: [],
        materials: [],
        allMaterials: [],
        selectedId: 0
    }


    componentDidMount() {
        let id = this.props.match.params.budgetId
        this.setState({selectedId: id})
        let listOfMaterials = []
        fetch(`http://localhost:5001/projects_materials?projectId=${id}`)
            .then(r => r.json())
            .then(projects => {
                projects.forEach(currentProject => listOfMaterials.push(currentProject))
                this.setState({ projects_materials: listOfMaterials })
        })
        let listOfProjects = []
        fetch(`http://localhost:5001/projects/${id}`)
            .then(r => r.json())
            .then(projects => {
                projects.forEach(currentProject => listOfProjects.push(currentProject))
                this.setState({ projects: listOfProjects })
                console.log(this.state)
            })
        let allMaterials = []
        fetch(`http://localhost:5001/materials/${id}`)
        .then(r => r.json())
        .then(projects =>{
            projects.forEach(currentProject => listOfProjects.push(currentProject))
            this.setState({ materials: allMaterials})
        })
    }
    render() {
        // render a div containing the material information
        // render material information
        if (this.state.projects_materials.materialId === this.state.projects.id) {
        return (
            <div className="container-full">
                <div className ="row">
                    <div className="col col-sm-3">
                    </div>
                    <div className="col content col-sm-6">
                        <BudgetResultsList project_materials={this.state.projects_materials} />
                    </div>
                    <div className="col col-sm-3">
                    </div>
                </div>
            </div>
        )
    }
}

}

//This page should populate with budget items, but we will see how that goes.

//I want to populate the dom like I did in project>projectList>home, but a div component will need more.
//Also check if linking to the right place, probably not.


//Potential new Component Did Mount
