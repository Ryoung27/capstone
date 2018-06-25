import React, { Component } from "react"
import Budget from "./Budget"
import "./BudgetResults.css"

export default class BudgetResultList extends Component {

state = {
    materials: []
}


    materialsDisplayAll = function () {
        console.log(this.props.budgetId)
        fetch(`http://localhost:5001/projects_materials?projectId=${+this.props.budgetId}&_expand=material`)
        .then(r => r.json())
        .then(materials => this.setState({ materials: materials }))
    }.bind(this)


    componentDidMount(){
       this.materialsDisplayAll()
    }
    render() {
        console.log(this.props)
        return (
            <div>
            <div className="BudgetResultList">
                <h2 className="BudgetResultList__header">Budget</h2>
                {
                 <Budget key={this.props.projects_materials} materials={this.state.materials} pm={this.props.pm} projects_materials={this.props.projects_materials} deleteInformation={this.props.deleteInformation} displayAll= {this.materialsDisplayAll} />
                 }
             </div>
            </div>
        )
    }
}
