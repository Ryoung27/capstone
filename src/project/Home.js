import React, { Component } from "react"
import ProjectList from "../project/ProjectList";


export default class Home extends Component {
    state = {
        explanation: "",
        projects: [],
        projectId: "",
        materialId: "",
        address: "",
        loanAmount: 0
    }
/* This should update the other sections of the api when the form button is submitted. */
    postInformation = (text) => fetch("http://localhost:5001/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                address: this.state.address
        })
    })
    .then(() => {
        return fetch("http://localhost:5001/projects")
    })
    .then(r => r.json())
    .then(address => {
        this.setState({
            address: address
        })
        this.displayAll()
    })

displayAll = function () {
    fetch(`http://localhost:5001/projects`)
    .then(r => r.json())
    .then(projects => this.setState({ projects: projects }))
    }



deleteInformation = (id) =>{ fetch(`http://localhost:5001/projects/${id}`, {
     method: "DELETE"
    }).then(data => {
        this.displayAll();
    })}



handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}


/*It seems easier to call the function to update when changes are made */
    componentDidMount() {
        this.displayAll()
    }
    render() {
        return (
            <div className="container-full">
                <div className ="row">
                    <div className="col col-sm-3">
                    </div>
                    <div className="col content col-sm-6">
                        <ProjectList projects={this.state.projects} id={this.state.id} deleteInformation={this.deleteInformation} />
                    </div>
                    <div className="inputForm">
                        <form>
                            <div className="form-group">
                                <label htmlFor="address">Construction Address</label>
                                    <textarea id="address"
                                              placeholder="Project Address"
                                              value={this.state.address}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="1"></textarea>
                                <div>
                                <label htmlFor="type">Consturction Type</label>
                                <textarea id="type"
                                              placeholder="Construction Type"
                                              value={this.state.projectType}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="1"></textarea>
                                </div>
                            </div>
                            <button type="button" id="color-try" onClick={this.postInformation} className="btn btn-info btn-lg">Submit</button>
                        </form>
                    </div>
                    <div className="col col-sm-3">
                    </div>
                </div>
            </div>
        )
    }
}
