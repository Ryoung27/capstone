import React, { Component } from "react"
//import ProjectList from "../project/ProjectList"
import BudgetResultsList from "./BudgetResultsList"
import "./BudgetResults.css"
export default class BudgetResults extends Component {
    state = {
        projects_materials: [],
        projects: [],
        materials: [],
        allMaterials: [],
        selectedId: 0,
        filteredProject: [],
        explanation: "",
        ifThenMatchMaterials: []
    }

    displayAll = function () {
        fetch(`http://localhost:5001/projects_materials`)
        .then(r => r.json())
        .then(projects_materials => this.setState({ projects_materials: projects_materials }))
    }.bind(this)

    deleteInformation = (id) =>{ fetch(`http://localhost:5001/materials/${id}?_embed=projects_materials`, {
        method: "DELETE"
       }).then(data => {
           this.props.displayAll();
       })}

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    deleteInformation = (id) =>{ fetch(`http://localhost:5001/projects/${id}`, {
        method: "DELETE"
       }).then(data => {
           this.displayAll();
       })}






    componentDidMount() {
        let id = this.props.match.params.budgetId
        this.setState({ selectedId: id })
        let listOfMaterials = []
        fetch(`http://localhost:5001/projects_materials?projectId=${id}`)
            .then(r => r.json())
            .then(projects => {
                projects.forEach(currentProject => listOfMaterials.push(currentProject))
                this.setState({ projects_materials: listOfMaterials })
                fetch(`http://localhost:5001/projects/${id}`)
                    .then(r => r.json())
                    .then(pro => {
                        // projects.forEach(currentProject => listOfProjects.push(currentProject))
                        this.setState({ projects: pro })
                        fetch(`http://localhost:5001/materials?projectId=${id}`)
                            .then(r => r.json())
                            .then(materials => {
                                //     projects.forEach(currentProject => listOfProjects.push(currentProject))
                                this.setState({ materials: materials })
                                listOfMaterials.map(projectMap => {
                                    if (projectMap.materialId === pro.id) {
                                        this.setState({ filteredProject: projectMap })
                                    }
                                    console.log(this.state)
                                })
                            })
                    })


            })
    }
    render() {
        return (
            <div className="container-full">
                <div className="row">
                    <div className="col col-sm-3">
                    </div>
                    <div className="col content col-sm-6">
                        <BudgetResultsList materials={this.state.materials} projects_materials={this.state.filteredProject} pm={this.state.project_materials} deleteInformation={this.deleteInformation} displayAll ={this.displayAll} />
                    </div>
                    <div className="col col-sm-3">
                    </div>
                </div>
            </div>)
    }

}


