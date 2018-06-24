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
        // materialName: "",
        // materialValue: 0,
        // actualCost: 0
    }
/* Potential work space for Friday June 22nd
   this should corresponde to Material Input
   Need to have Kimmy look at, or get assistance.
   Worksish
*/
postInformation = (text) => fetch("http://localhost:5001/materials", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
            materialName: this.state.materialName,
            materialValue: this.state.materialValue,
            actualCost: this.state.actualCost
    })
})
.then(() => {
    return fetch("http://localhost:5001/materials")
})
.then(r => r.json())
.then(materialName => {
    this.setState({
        materialName: materialName,
        materialValue: 0,
        actualCost: 0
    })
    this.displayAll()
})

displayAll = function () {
fetch(`http://localhost:5001/materials`)
.then(r => r.json())
.then(materials => this.setState({ materials: materials }))
}



/*Potential work space for Friday June 22nd */
delete =function(event) {
    this.props.deleteInformation(event.target.id)
    this.props.displayAll()
}.bind(this)


    /* This allows to post to the explanation of API */
    explanationMessage = (text) => fetch("http://localhost:5001/projects_materials", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            explanation: this.state.explanation
        })
    })
        .then(() => {
            return fetch(`http://localhost:5001/projects_materials`)
        })
        .then(r => r.json())
        .then(explanation => {
            this.setState({
                explanation: explanation
            })
        })

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    unique = 0;
    componentDidMount() {
        fetch(`http://localhost:5001/materials`)
            .then(r => r.json())
            .then(materials => this.setState({ materials: materials }))

    }
    render() {
        // The explanation button below doesn't work correctly, it should have the same id's as the project and link.
        //Also it skips the title of every other explanation, probably to do with divs.
        //Delete button no longer works
        return (
            <div>
                {this.props.materials.map(p => {
                    return <div key={this.unique++}>
                        <div id="budgetItemsComplete">
                            <div id="materialName">
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
                                Explanation of Overage: {p.explanation}
                            </div>
                        </div>
                        <div className="newsfeed">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="explanation"><h5>Explanation of overage.</h5></label>
                                    <textarea id="explanation"
                                        className="form-control"
                                        rows="1"></textarea>
                                </div>
                                <button type="button" id="color-try" onClick={this.explanationMessage} className="btn btn-info btn-lg">Post</button>
                            </form>
                        </div>
                        <button type="button" className="btn btn-primary, color-try" onClick={this.delete} id={p.materialId}>
                            Delete
               </button>
                    </div>
                })}
                <div>
                    {this.props.projects_materials.explanation}
                </div>
                <div id="amountUsed">
                    Total Amount of Funds Used:
                </div>
                <div id="budgetedAmount">
                    Total amount of Funds Budgeted:
                </div>
                <form>
                    <div className="material-form">
                    <label htmlForm="materials">Material Input</label>
                    <div>
                    <textarea id="materialNameInput"
                              placeholder="Material Name"
                              value={this.state.materialName}
                              onChange={this.handleFieldChange}
                              className="form-control"
                              rows="1"></textarea></div>
                    <div>
                    <textarea id="materialNameInput"
                              placeholder="Expected Cost"
                              value={this.state.materialValue}
                              onChange={this.handleFieldChange}
                              className="form-control"
                              rows="1"></textarea></div>
                    <div>
                    <textarea id="materialNameInput"
                              placeholder="Real Cost"
                              value={this.state.actualCost}
                              onChange={this.handleFieldChange}
                              className="form-control"
                              rows="1"></textarea></div>
                    </div>
                    <button type="button" id="color-try" onClick={this.postInformation} className="btn btn-info btn-lg">Submit</button>
                </form>
            </div>
        )
    }

}

// If I can get the explanation working I can get the
// material post to work. Then I need to get the Total
// Amount of funds used and navbar/login working.
