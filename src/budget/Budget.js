import React, { Component } from "react"

export default class Budget extends Component {
    render() {
        return (
            <div>
                <div>
                 {this.props.projects_materials.explanation}
                </div>
            </div>
        )
    }

}


