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







    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        this.displayAll()
    }
    render() {
        return (
                    <div>
                        <BudgetResultsList budgetId={this.props.match.params.budgetId} materials={this.state.materials} projects_materials={this.state.filteredProject} pm={this.state.project_materials} deleteInformation={this.deleteInformation} displayAll ={this.displayAll}/>
                    </div>

           )
    }

}

