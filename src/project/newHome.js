import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BudgetResults from '../budget/BudgetResults';
//import logo from './logo.svg';
import NavBar from '../nav/NavBar';
import Home from '../project/Home'

class NewHome extends Component {
      state = {
        currentView: "login",
        searchTerms: "",
        activeUser: localStorage.getItem("yakId")
    }

/*Steve's navbar/login, can be completely taken
out to bring pre-Saturday functionality
*/


  render() {
    return (
      <Router>
      <div>

        <Route exact path ={'/'} component={Home} />
            <Route exact path={'/budget/:budgetId'} component={BudgetResults}/>
        </div>
        </Router>

  )
  }
}

export default NewHome;