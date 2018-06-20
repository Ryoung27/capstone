import React, { Component } from "react"
//import ProjectList from "../project/ProjectList"
import BudgetResultsList from "./BudgetResultsList"
import "./BudgetResults.css"
export default class BudgetResults extends Component {
    state = {
        projects_materials: [],
        projects: [],
        materials: [],
        allMaterials: [],
        selectedId: 0,
        filteredProject: [],
        explanation: "",
        ifThenMatchMaterials: []
    }

    displayAll = function () {
        fetch(`http://localhost:5001/projects_materials`)
        .then(r => r.json())
        .then(projects_materials => this.setState({ projects_materials: projects_materials }))
    }.bind(this)


//http://localhost:5001/materials/${id}?_embed=projects_materials


    deleteInformation = (id) => fetch(`http://localhost:5001/materials/${id}?_embed=projects_materials`, {
        method: "DELETE"
       }).then(data => {
           this.props.displayAll();
       })
       //    Do a return
            // return fetch(`http://localhost:5001/projects_materials/${id}`)
            // .then(r => r.json())
            // .then(listOfIfThenMatchMaterials => {
            //     // this.setState({ifThenMatchMaterials: ifThenMatchMaterials})
            //     listOfIfThenMatchMaterials.forEach(matchMaterialsMap => {
            //         if (matchMaterialsMap.materialId === materials.id){
            //          this.deleteInformation(projects_materials.materialId)
            //         console.log("this works")
            //         }
            //     })
            // }
       // )

           //return fetch foreach response with project materials if statement comparing materials.id projectmaterials.materialsid if they match also delete.



    // joinTableDeleteInformation = (id) =>
    //  fetch(`http://localhost:5001/projects_materials/${id}`, {
    //      method: "DELETE"
    //  }).then(data => {
    //      this.props.displayAll();
    //      return fetch(`http://localhost:5001/materials/${id}`)
    //     .then(r => r.json())
    //     .then(listOfIfThenMatchMaterials => {
    //         // this.setState({ifThenMatchMaterials: ifThenMatchMaterials})
    //         listOfIfThenMatchMaterials.forEach(matchMaterialsMap => {
    //             if (matchMaterialsMap.materialId === materials.id){
    //              this.deleteInformation(projects_materials.materialId)
    //  })


    // explanationMessage = (text) => fetch("http://localhost:5001/projects_materials", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         explanation: this.state.explanation
    //     })
    // })
    //     .then(() => {
    //         return fetch("http://localhost:5001/projects_materials")
    //     })
    //     .then(r => r.json())
    //     .then(explanation => {
    //         this.setState({
    //             explanation: explanation
    //         })
    //     })
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
//Def need to double check, did this at home, esp. projects_materials
    // deleteInformation = (id) => fetch("http://localhost:5001/projects_materials/${id}", {
    //     method: "DELETE"
    //    }).then(data => {
    //        this.displayAll();
    //    })



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
                        <BudgetResultsList materials={this.state.materials} projects_materials={this.state.filteredProject} pm={this.state.project_materials} deleteInformation={this.deleteInformation} displayAll ={this.displayAll} />
                    </div>



                    {/* <div className="newsfeed">
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
                    </div> */}


                    <div className="col col-sm-3">
                    </div>
                </div>
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


