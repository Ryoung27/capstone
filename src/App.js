import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BudgetResults from './budget/BudgetResults';
//import logo from './logo.svg';
import NewHome from './project/NewHome';
import NavBar from './nav/NavBar';
import Login from './auth/Login';
import './App.css';

class App extends Component {
      // Set initial state changed current view to login
      //added activeUser section
      state = {
        currentView: "login",
        searchTerms: "",
        activeUser: localStorage.getItem("yakId")
    }

/*Steve's navbar/login, can be completely taken
out to bring pre-Saturday functionality
*/

//Binding?

// Function to update local storage and set activeUser state
setActiveUser = (val) => {
  if (val) {
      localStorage.setItem("yakId", val)
  } else {
      localStorage.removeItem("yakId")
  }
  this.setState({
      activeUser: val
  })
}

// View switcher -> passed to NavBar and Login
// Argument can be an event (via NavBar) or a string (via Login)
showView = function (e) {
  let view = null

  // Click event triggered switching view
  if (e.hasOwnProperty("target")) {
      view = e.target.id.split("__")[1]

      // View switch manually triggered by passing in string
  } else {
      view = e
  }

  // If user clicked logout in nav, empty local storage and update activeUser state
  if (view === "logout") {
      this.setActiveUser(null)
  }

  // Update state to correct view will be rendered
  this.setState({
      currentView: view
  })

}.bind(this)

/*
  Function to determine which main view to render.

  TODO:
      1. Profile view
      2. Register view
      3. Create event view
*/
View = () => {
  if (localStorage.getItem("yakId") === null) {
      return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
  } else {
      switch (this.state.currentView) {
          case "logout":
              return <Login showView={this.showView} setActiveUser={this.setActiveUser} />
          case "home":
          default:
              return <NewHome activeUser={this.state.activeUser} />
      }
  }
}


/*Ending to Saturday play day Don't forget the state changes up top */

  render() {
    return (
    //   <Router>
    //   <div>
      <article>
                <NavBar viewHandler={this.showView}
                    activeUser={this.state.activeUser}
                    setActiveUser={this.setActiveUser}
                />
                {this.View()}
      </article>
//         {/* <Route exact path ={'/'} component={Home} />
//             <Route exact path={'/budget/:budgetId'} component={BudgetResults}/>
//         </div>
//         </Router>
//   ) */}
//   }
    )
}
}
export default App
