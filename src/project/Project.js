import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Project.css"


export default class Project extends Component {





//change path
    deleteInformation = (id) => fetch(`http://localhost:5001/projects/${id}?_embed=projects_materials`, {
        method: "DELETE"
    }).then(data => {
        this.props.displayAll();
       })


    componentDidMount(){this.displayAll()}
    unique = 0;
    render() {
        return(
            <div>
                {this.props.projects.map(p => {
                    return <div key={this.unique++}>
                         <div className="card post">
                            <Link to={`/budget/${p.id}`} className='card-text' project={p}>{p.address} </Link>
                            <button type="button" className="btn btn-primary" onClick={this.deleteInformation.bind(this, p.id)} id={p.id}>
                                Delete
                            </button>
                        </div>
                    </div>
                })}
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
