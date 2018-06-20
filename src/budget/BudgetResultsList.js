import React, { Component } from "react"
import Budget from "./Budget"
import "./BudgetResults.css"

export default class BudgetResultList extends Component {
    componentDidMount(){
        console.log("BudgetResultList")
    }
    render() {
        console.log(this.props)
        return (
            <div>
            <div className="BudgetResultList">
                <h2 className="BudgetResultList__header">BudgetResult</h2>
                {
                 <Budget key={this.props.projects_materials} materials={this.props.materials} pm={this.props.pm} projects_materials={this.props.projects_materials} deleteInformation={this.props.deleteInformation} displayAll= {this.props.displayAll} />
                 }
             </div>
            </div>
        )
    }
}
