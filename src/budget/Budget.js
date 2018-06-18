import React, { Component } from "react"

export default class Budget extends Component {
    unique = 0;
    componentDidMount(){console.log("project")}
    render() {
        console.log(this.props.materials)
        return (
            <div>
                {this.props.materials.map(p =>{
                return <div key={this.unique++}>
                    {p.materialName}
                </div>
                })}
                <div>
                 {this.props.projects_materials.explanation}
                </div>
            </div>
        )
    }

}


