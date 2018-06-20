import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Project.css"


export default class Project extends Component {

        //change path
    delete = function (event) {
        this.props.deleteInformation(event.target.id)
    }.bind(this)

        handleFieldChange = (evt) => {
            const stateToChange = {}
            stateToChange[evt.target.id] = evt.target.value
            this.setState(stateToChange)
        }


    render() {
        return (
            <div>
                <div className="card post">
                    <Link to={`/budget/${this.props.projects.id}`} className='card-text' >{this.props.projects.address} </Link>
                    <button type="button" className="btn btn-primary" onClick={this.delete} id={this.props.projects.id}>
                        Delete
                            </button>
                </div>

            </div>
        )
    }
}


//Example of link button, yaya
{/* <div className="col content col-sm-6">
<BudgetResultsList materials={this.state.materials} projects_materials={this.state.filteredProject} pm={this.state.project_materials} deleteInformation={this.deleteInformation} displayAll ={this.displayAll} />
</div> */}


//button example
{/* <button type ="button" className="btn btn-primary" onClick={this.props.deleteInformation.bind(this, p.id)} id={p.id}>
Delete
</button> */}
