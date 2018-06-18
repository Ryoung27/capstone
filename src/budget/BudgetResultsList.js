import React, { Component } from "react"
import Budget from "./Budget"
import "./BudgetResults.css"

export default class BudgetResultList extends Component {
    render() {

        return (
            <div>
            <div className="BudgetItemResult">
                <h2 className="BudgetItemResult__header">More info</h2>
                {
                    this.props.materials.map(p => <Budget key={p.id} materials={p} />)
                }
            </div>
            <div className="BudgetResultList">
                <h1 className="BudgetResultList__header">BudgetResult</h1>
                {
                    this.props.project_materials.map(p => <Budget key={p.id} projects_materials={p} />)
                }
            </div>
            </div>
        )
    }
}
