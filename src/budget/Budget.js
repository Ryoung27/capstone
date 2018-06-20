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
    componentDidMount(){this.props.displayAll()}
    render() {

        return (
            <div>
                {this.props.materials.map(p =>{
                return <div key={this.unique++}>
                    {p.materialName}

                    <div className="newsfeed">
                        <form>
                            <div className="form-group">
                                <label htmlFor="explanation"><h5>Explanation of overage.</h5></label>
                                <textarea id="explanation"
                                    value={this.state.explanation}
                                    onChange={this.handleFieldChange}
                                    className="form-control"
                                    rows="1"></textarea>
                            </div>
                            <button type="button" onClick={this.explanationMessage} className="btn btn-info btn-lg">Post</button>
                        </form>
                    </div>
                <button type ="button" className="btn btn-primary" onClick={this.props.deleteInformation.bind(this, p.id)} id={p.id}>
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


