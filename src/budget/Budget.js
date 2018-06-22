import React, { Component } from "react"

export default class Budget extends Component {
    state = {
        projects_materials: this.props.pm,
        projects: [],
        materials: [],
        allMaterials: [],
        selectedId: 0,
        filteredProject: [],
        explanation: ""
    }

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
            return fetch("http://localhost:5001/projects_materials")
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
                                Explanation of Overage:
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
                                <button type="button" onClick={this.explanationMessage} className="btn btn-info btn-lg">Post</button>
                            </form>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.delete} id={p.materialId}>
                            Delete
               </button>
                    </div>
                })}
                <div>
                    {this.props.projects_materials.explanation}
                </div>
            </div>
        )
    }

}


