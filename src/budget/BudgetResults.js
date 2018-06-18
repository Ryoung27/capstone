import React, { Component } from "react"
//import ProjectList from "../project/ProjectList"
import BudgetResultsList from "./BudgetResultsList"
import "./BudgetResults.css"
//I need to update the fetch to follow the right link on click.
export default class BudgetResults extends Component {
    state = {
        projects_materials: [],
        projects: [],
        materials: [],
        allMaterials: [],
        selectedId: 0,
        filteredProject: [],
        explanation: ""
    }

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








    componentDidMount() {
        let id = this.props.match.params.budgetId
        this.setState({ selectedId: id })
        let listOfMaterials = []
        fetch(`http://localhost:5001/projects_materials?projectId=${id}`)
            .then(r => r.json())
            .then(projects => {
                projects.forEach(currentProject => listOfMaterials.push(currentProject))
                this.setState({ projects_materials: listOfMaterials })
                fetch(`http://localhost:5001/projects/${id}`)
                    .then(r => r.json())
                    .then(pro => {
                        // projects.forEach(currentProject => listOfProjects.push(currentProject))
                        this.setState({ projects: pro })
                        fetch(`http://localhost:5001/materials?projectId=${id}`)
                            .then(r => r.json())
                            .then(materials => {
                                //     projects.forEach(currentProject => listOfProjects.push(currentProject))
                                this.setState({ materials: materials })
                                listOfMaterials.map(projectMap => {
                                    if (projectMap.materialId === pro.id) {
                                        this.setState({ filteredProject: projectMap })
                                    }
                                    console.log(this.state)
                                })
                            })
                    })


            })
    }
    render() {
        // render a div containing the material information
        // render material information
        return (
            <div className="container-full">
                {/* {this.state.projects_materials.map(projectMap =>{
            if (projectMap.materialId === this.state.projects.id) { */}
                <div className="row">
                    <div className="col col-sm-3">
                    </div>
                    <div className="col content col-sm-6">
                        <BudgetResultsList materials={this.state.materials} projects_materials={this.state.filteredProject} />
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


                    <div className="col col-sm-3">
                    </div>
                </div>
                }
        {/* })
        } */}
            </div>)
    }
    //     if (this.state.projects_materials.materialId === this.state.projects.id) {
    //     return (
    //         <div className="container-full">
    //             <div className ="row">
    //                 <div className="col col-sm-3">
    //                 </div>
    //                 <div className="col content col-sm-6">
    //                     <BudgetResultsList materials={this.state.materials} project_materials={this.state.projects_materials} />
    //                 </div>
    //                 <div className="col col-sm-3">
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    //else{return null}
}


//This page should populate with budget items, but we will see how that goes.

//I want to populate the dom like I did in project>projectList>home, but a div component will need more.
//Also check if linking to the right place, probably not.


//Potential new Component Did Mount
