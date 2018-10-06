import React, { Component } from "react"
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
    // The use of state is something we learned three months ago.
    // Today I would probably try to wrap my head around Redux.

    // This display all gets our material information from the json file.
    // While the delete information below it deletes then calls displayAll
    // to refresh the page.

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

// This is the breakdown of the budget items, to actually display items
// on the budget.


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

