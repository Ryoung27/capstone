import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BudgetResults from './budget/BudgetResults';
// import logo from './logo.svg';
import Home from './project/Home';
// import NavBar from './nav/NavBar';
import './App.css';

class App extends Component {
      // Set initial state
      state = {
        currentView: "",
        searchTerms: ""
    }
  render() {
    return (
      <Router>
      <div>
        <Route exact path ={'/'} component={Home} />
            <Route exact path={'/budget/:budgetId'} component={BudgetResults}/>

        </div>
        </Router>
      /* <article>
        <Route exact path={'/budget'} component={BudgetResults}/>
          <NavBar viewHandler={this.showView}
          />
          <Home/>


      </article>
      </div> */
  )
  }
}

export default App;
