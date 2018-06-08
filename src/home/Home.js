import React, { Component } from "react"
import ProjectList from "../project/ProjectList";

export default class Home extends Component {

    render() {
        return (
            <div className="container-full">
            <div className="row">
                <div className="col col-sm-3">
                    <ProjectList />
                </div>
                <div className="col content col-sm-6">
                    <div className="newsfeed">
                        <form>
                            <div className="form-group">
                                <label htmlFor="message"><h5>What would you like to Yak about?</h5></label>
                                <textarea id="message"
                                          value={this.state.message}
                                          onChange={this.handleFieldChange}
                                          className="form-control"
                                          rows="4"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}