import React, { Component } from "react"
import Budget from "./Budget"
import "./BudgetResults.css"

export default class BudgetResultList extends Component {
    render() {

        return (
            <div className="BudgetResultList">
                <h1 className="BudgetResultList__header">BudgetResult</h1>
                {
                    this.props.project_materials.map(p => <Budget key={p.id} projects_materials={p} />)
                }
            </div>
        )
    }
}
