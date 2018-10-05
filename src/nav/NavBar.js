import React, { Component } from "react"
import "./NavBar.css"
//Literally just a copy of Steve's
//Same as login.

export default class NavBar extends Component {


    // Set initial state
    state = {
        searchTerms: ""
    }


    // This is the login and logout section of the navbar, it's kind of a fake login, but appears the way one should.
    // The reason it is kind of fake is it doesn't have a real backend.

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

