
# Allbeta: Budget
This is the repository for the front end client app that helps banks and construction companies communicate and keep records of construction loans.

# Development setup
1. clone this repository
1. run the commands `npm install` and `npm start`
1. your development server should now be running on port 5001.


# Allbeta: Budget Overview
Allbeta Budget is designed to keep track of construction projects for banks. When a builder wants to take a loan out from a bank the bank keeps track of all expendatures and tracks the amount spent and proof of payment. It also keeps track of overages and reasons for overages.

# Developer Notes
The following is information about the overall design and workflow of developing this app

## High level data
Data pulled from a simulated api. It is then called in the app were nessesary and passed as props down to the lowest level components which are contained in the display-components directory. These components take the text and callback functions needed to handle the data and load it onto the DOM.
