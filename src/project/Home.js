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
        projectType: ""
    }
/* This should update the other sections of the api when the form button is submitted. */
    postInformation = (text) => fetch("http://localhost:5001/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                address: this.state.address,
                loanAmount: this.state.loanAmount,
                projectType: this.state.projectType
        })
    })
    .then(() => {
        return fetch("http://localhost:5001/projects")
    })
    .then(r => r.json())
    .then(address => {
        this.setState({
            address: address,
            loanAmount: this.state.loanAmount,
            projectType: this.state.projectType
        })
        this.displayAll()
    })

/* If constuction type doesn't work delete all below. */
//     postConstructionType = (text) => fetch("http://localhost:5001/projects/projectType", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             projectType: this.state.projectType
//         })
//     })
//     .then(() => {
//         return fetch("http://localhost:5001/projects/projectType")
//     })
//     .then(r => r.json())
//     .then(projectType => {
//         this.setState({
//             projectType: projectType
//         })
//         this.displayMore()
//     })

// displayMore = function () {
//     fetch(`http://localhost:5001/projects/projectType`)
//     .then(r => r.json())
//     .then(projectType => this.setState({ projectType: projectType}))
// }



/*If construction type doesn't work delete all above. */

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
        // this.displayMore()
    }
    render() {
        return (
            <div className="container-full">
                <div className ="row">
                    <div className="col col-sm-1">
                    </div>
                    <div className="col content col-sm-8">
                        <ProjectList projects={this.state.projects} id={this.state.id} deleteInformation={this.deleteInformation} />
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
                                <label htmlFor="projectType">Construction Type</label>
                                <textarea id="projectType"
                                              placeholder="Construction Type"
                                              value={this.state.projectType}
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
                                <button type="button" id="color-try" onClick={this.postInformation} className="btn btn-info btn-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="col col-sm-3">
                    </div>
                </div>
            </div>
        )
    }
}
