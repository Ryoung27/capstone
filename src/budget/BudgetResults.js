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
        fetch(`http://localhost:5001/projects_materials?_expand=material`)
        .then(r => r.json())
        .then(materials => this.setState({ materials: materials }))
    }.bind(this)

    deleteInformation = (id) => fetch(`http://localhost:5001/materials/${id}?_embed=projects_materials`, {
        method: "DELETE"
       }).then(data => {
           this.displayAll();
       })




    //    displayAll = function () {
    //     fetch(`http://localhost:5001/projects`)
    //     .then(r => r.json())
    //     .then(projects => this.setState({ projects: projects }))
    //     }






    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

//This doesn't work correctly it pulls all materials instead of certain ones by id
    componentDidMount() {
        this.displayAll()
        // fetch(`http://localhost:5001/projects_materials?projectId=2&_expand=project&_expand=material`)
        // .then(r => r.json())
        // .then(project_materials => this.setState({ project_materials: project_materials}))

    // http://localhost:5001/projects_materials?projectId=2&_expand=project&_expand=material
    //     let id = this.props.match.params.budgetId
    //     this.setState({ selectedId: id })
    //     let listOfMaterials = []
    //     fetch(`http://localhost:5001/projects_materials?projectId=${id}`)
    //         .then(r => r.json())
    //         .then(projects => {
    //             projects.forEach(currentProject => listOfMaterials.push(currentProject))
    //             this.setState({ projects_materials: listOfMaterials })
    //             fetch(`http://localhost:5001/projects/${id}`)
    //                 .then(r => r.json())
    //                 .then(pro => {
    //                     // projects.forEach(currentProject => listOfProjects.push(currentProject))
    //                     this.setState({ projects: pro })
    //                     fetch(`http://localhost:5001/materials?projectId=${id}`)
    //                         .then(r => r.json())
    //                         .then(materials => {
    //                             //     projects.forEach(currentProject => listOfProjects.push(currentProject))
    //                             this.setState({ materials: materials })
    //                             listOfMaterials.map(projectMap => {
    //                                 if (projectMap.materialId === pro.id) {
    //                                     this.setState({ filteredProject: projectMap })
    //                                 }
    //                                 console.log(this.state)
    //                             })
    //                         })
    //                 })


    //         })
    }
    render() {
        return (
            <div className="container-full">
                <div className="row">
                    <div className="col col-sm-3">
                    </div>
                    <div className="col content col-sm-6">
                        <BudgetResultsList budgetId={this.props.match.params.budgetId} materials={this.state.materials} projects_materials={this.state.filteredProject} pm={this.state.project_materials} deleteInformation={this.deleteInformation} displayAll ={this.displayAll} />
                    </div>
                    <div className="col col-sm-3">
                    </div>
                </div>
            </div>)
    }

}

//I believe component did mount and render are responsible for not
//showing the right data when clicked on, which clicked it should show the corresponding
//materials.
