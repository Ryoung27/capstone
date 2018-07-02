import React, { Component } from "react"
import ProjectList from "../project/ProjectList";
import "./Home.css"

export default class Home extends Component {
    state = {
        explanation: "",
        projects: [],
        projectId: "",
        materialId: "",
        address: "",
        loanAmount: "",
        projectType: "",
        builder: ""
    }




    postInformation = (text) => fetch("http://localhost:5001/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                address: this.state.address,
                loanAmount: this.state.loanAmount,
                projectType: this.state.projectType,
                builder: this.state.builder
        })
    })
    .then(() => {
        return fetch("http://localhost:5001/projects")
    })
    .then(r => r.json())
    .then(address => {
        this.setState({
            address: this.state.address,
            loanAmount: this.state.loanAmount,
            projectType: this.state.projectType,
            builder: this.state.builder
        })
        this.displayAll()
        window.location.reload()
    })


displayAll = function () {
    fetch(`http://localhost:5001/projects`)
    .then(r => r.json())
    .then(projects => this.setState({ projects: projects
     }))
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


    componentDidMount() {
        this.displayAll()
    }
    render() {
        return (
            <div className="container-full">
                <div className ="row">
                    <div className="col col-sm-1">
                    </div>
                    <div className="col content col-sm-8">
                        <ProjectList projects={this.state.projects} id={this.state.id} deleteInformation={this.deleteInformation} />
                        <div className="inputForm col-12">
                        <form>
                            <div className="form-group">
                                <div>
                                <label htmlFor="address">Construction Address</label>
                                    <textarea id="address"
                                              placeholder="Project Address"
                                              value={this.state.address}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="1"></textarea>
                                </div>
                                <div>
                                <label htmlFor="projectType">Construction Type</label>
                                <textarea id="projectType"
                                              placeholder="Construction Type"
                                              value={this.state.projectType}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="1"></textarea>
                                </div>
                                <div>
                                <label htmlFor="builder">Builder</label>
                                <textarea id="builder"
                                              placeholder="Builder"
                                              value={this.state.builder}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="1"></textarea>
                                </div>
                                <div>
                                <label htmlFor="loanAmount">Loan Amount</label>
                                <textarea id="loanAmount"
                                              placeholder="Loan Amount"
                                              value={this.state.loanAmount}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="1"></textarea>
                                </div>
                                <button type="button" id="color-try" onClick={this.postInformation} className="btn btn-info btn-lg col-12">Submit</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="col col-sm-1">
                    </div>
                </div>
            </div>
        )
    }
}
