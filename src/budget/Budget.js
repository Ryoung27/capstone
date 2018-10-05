import React, { Component } from "react"
import "./BudgetResults.css"

export default class Budget extends Component {
    state = {
        projects_materials: this.props.pm,
        projects: [],
        materials: [],
        allMaterials: [],
        selectedId: 0,
        filteredProject: [],
        explanation: "",
        materialName: "",
        materialValue: "",
        actualCost: "",
        projectId: 0
    }

// These are all very similar functions, if not the same, from Home.js.


    displayAll = function () {
        fetch(`http://localhost:5001/materials`)
            .then(r => r.json())
            .then(materials => this.setState({ materials: materials }))
    }

    // this pares our join table to find materials attached to the
    // currently displayed project.

    joinTableInformation = (text) => fetch("http://localhost:5001/projects_materials", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                "projectId": parseInt(text.projectId),
                "materialId": text.materialId
        })
    })

    postInformation = () => fetch("http://localhost:5001/materials", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            materialName: this.state.materialName,
            materialValue: this.state.materialValue,
            actualCost: this.state.actualCost,
            explanation: this.state.explanation
        })
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let projectsMaterials = {
                "projectId": this.props.budgetResultsId,
                "materialId": data.id
              }
            this.joinTableInformation(projectsMaterials)
            console.log(projectsMaterials)
            return fetch("http://localhost:5001/materials")
        })
        .then(r => r.json())
        .then(materialName => {
            this.setState({
                materialName: materialName,
                materialValue: this.state.materialValue,
                actualCost: this.state.actualCost,
                explanation: this.state.explanation
            })
            this.displayAll()
            window.location.reload()
        })







    delete = function (event) {
        this.props.deleteInformation(event.target.id)
        window.location.reload()
    }.bind(this)






    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    unique = 0;
    componentDidMount() {
        console.log(this.props);
        fetch(`http://localhost:5001/materials`)
            .then(r => r.json())
            .then(materials => this.setState({ materials: materials }))

    }


    isOverage(p) {
        {
            if (p.material.materialValue - p.material.actualCost >= 0) {
                return "card-text"
            } else {
                return "card-text-color-try"
            }
        }
    }


    render() {
        return (
            <div>
            <div className="row">
                {this.props.materials.map(p => {
                    return <div key={this.unique++} id="budgetItemsComplete" className="col-4">
                        <div>
                            <div id="materialName" className={this.isOverage(p)}>
                                Material Name: {p.material.materialName}
                            </div>
                            <div id="materialValue">
                                Expected Cost: {p.material.materialValue}
                            </div>
                            <div>
                                Real Cost: {p.material.actualCost}
                            </div>
                            <div id="remainingAmount">
                                Amount Remaining: {p.material.materialValue - p.material.actualCost}
                            </div>
                            <div id="explanationSection">
                                Explanation of Overage: {p.material.explanation}
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary, color-try" onClick={this.delete} id={p.materialId}>
                            Delete
                         </button>
                    </div>
                })}
                <form className="col-12">
                    <div className="material-form">
                        <label htmlFor="materialName">Material Input</label>
                        <textarea id="materialName"
                            placeholder="Material Name"
                            value={this.state.materialName}
                            onChange={this.handleFieldChange}
                            className="form-control"
                            rows="1"></textarea>
                        <div>
                            <label htmlFor="materialValue">Expected Cost</label>
                            <textarea id="materialValue"
                                placeholder="Expected Cost"
                                value={this.state.materialValue}
                                onChange={this.handleFieldChange}
                                className="form-control"
                                rows="1"></textarea></div>
                        <div> <label htmlFor="actualCost">Actual Cost</label>
                            <textarea id="actualCost"
                                placeholder="Actual Cost"
                                value={this.state.actualCost}
                                onChange={this.handleFieldChange}
                                className="form-control"
                                rows="1"></textarea></div>
                        <div><label htmlFor="explanation">Explanation of Overage</label>
                            <textarea id="explanation"
                                placeholder="Explanation of Overages"
                                value={this.state.explanation}
                                onChange={this.handleFieldChange}
                                className="form-control"
                                rows="1"></textarea></div>
                        <button type="button" id="color-try" onClick={this.postInformation} className="btn btn-info btn-lg col-12">Submit</button>
                    </div>
                </form>
                </div>
        </div>
        )
    }

}
