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
            {/* <div className="BudgetItemResult">
                <h2 className="BudgetItemResult__header">More info</h2>
                {
                 <Budget key={this.props.materials.id} materials={this.props.materials}/>
                }
            </div> */}
            <div className="BudgetResultList">
                <h2 className="BudgetResultList__header">BudgetResult</h2>
                {
                 <Budget key={this.props.projects_materials} materials={this.props.materials} projects_materials={this.props.projects_materials} />
                 }
             </div>
            </div>
        )
    }
}
