import React, { Component } from "react"
//import yak from "../images/yak.png"
//import $ from "jquery"
//import profilepic from "../images/profile.png"
import "./NavBar.css"
//Literally just a copy of Steve's
//Same as login.

export default class NavBar extends Component {


    // Set initial state
    state = {
        searchTerms: ""
    }

    /**
     * Local search handler, which invokes the searchHandler reference
     * passed from App
     */
    // search = (e) => {
    //     if (e.charCode === 13) {
    //         this.props.searchHandler(this.state.searchTerms)
    //         this.setState({ searchTerms: "" })
    //     }
    // }

    LoginLogout = () => {
        if (this.props.activeUser === null) {
            return <a className="nav-link" id="nav__login"
                onClick={this.props.viewHandler} href="#">Login</a>
        } else {
            return <a className="nav-link" id="nav__logout"
                onClick={this.props.viewHandler} href="#">Logout</a>
        }
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="navbar-nav px-3">
                </ul>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <this.LoginLogout />
                    </li>
                </ul>
            </nav>
        )
    }
}

