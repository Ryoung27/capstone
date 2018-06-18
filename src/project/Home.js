import React, { Component } from "react"
import ProjectList from "../project/ProjectList";

export default class Home extends Component {
    state = {
        explanation: "",
        projects: [],
        projectId: "",
        matieralId: "",
        address: ""
    }
/*This updates the explanation section of the api*/
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



handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

displayAll = function () {
    fetch(`http://localhost:5001/projects`)
    .then(r => r.json())
    .then(projects => this.setState({ projects: projects }))
}

/*Work area for today */
    componentDidMount() {
        this.displayAll()
        // fetch(`http://localhost:5001/projects`)
        //     .then(r => r.json())
        //     .then(projects => this.setState({ projects: projects }))
    }
    render() {
        return (
            <div className="container-full">
                <div className ="row">
                    <div className="col col-sm-3">
                    </div>
                    <div className="col content col-sm-6">
                        <ProjectList projects={this.state.projects} />
                    </div>
                    <div className="newsfeed">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="explanation"><h5>Explanation of overage.</h5></label>
                                    <textarea id="explanation"
                                              value={this.state.explanation}
                                              onChange={this.handleFieldChange}
                                              className="form-control"
                                              rows="4"></textarea>
                                </div>
                                <button type="button" onClick={this.explanationMessage} className="btn btn-info btn-lg">Post</button>
                            </form>
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
                            </div>
                            <button type="button" onClick={this.postInformation} className="btn btn-info btn-lg">Submit</button>
                        </form>
                    </div>
                    <div className="col col-sm-3">
                    </div>
                </div>
            </div>
        )
    }
}

//Should my link be in Home or project?
//How can I clear the dom with this link than bring in budget?
//Find out how my links should work than not hardcode another nav, but something similar
//Use Steve's Home.js file to recreate posting to api?
//Use his message as your explanation.