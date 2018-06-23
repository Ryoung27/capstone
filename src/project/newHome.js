// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import BudgetResults from './budget/BudgetResults';
// //import logo from './logo.svg';
// import newHome from './project/newHome';
// import NavBar from './nav/NavBar';
// //import Login from './auth/Login';
// //import './App.css';
// import Home from './project/Home'

// class newHome extends Component {
//       // Set initial state changed current view to login
//       //added activeUser section
//       state = {
//         currentView: "login",
//         searchTerms: "",
//         activeUser: localStorage.getItem("yakId")
//     }

// /*Steve's navbar/login, can be completely taken
// out to bring pre-Saturday functionality
// */


//   render() {
//     return (
//       <Router>
//       <div>
//       <article>
//                 <NavBar viewHandler={this.showView}
//                     activeUser={this.state.activeUser}
//                     setActiveUser={this.setActiveUser}
//                 />
//                 {this.View()}
//       </article>
//         <Route exact path ={'/'} component={Home} />
//             <Route exact path={'/budget/:budgetId'} component={BudgetResults}/>
//         </div>
//         </Router>

//   )
//   }
// }

// export default newHome;