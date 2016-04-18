## About

RentMe. is a web application that allows a user to look for items to rent according to location and availability. Examples: 1) user books a surf trip to San Diego. Instead of paying for the cost of transporting a surfboard on a plane, they use RentMe. to look for a board in San Diego for the specific dates of their trip. 2) User has items they are not currently using, e.g., tent, bike, party costumes, storage space, etc., which they can make available on RentMe.

## RentMe is built using:

Front-End: Angular.js + Angular Material
Back-End: Node + Express
Database: mySQL

Front-End files are organised according to views / templates, Back-End files are organised according to functionality (controllers, models, etc.). 

## User journey:

Below is an illustration of a potential user journey. For some parts, steps do not necessarily follow each other. 

**Step 1:** User lands on Homepage. Items displayed on Homepage are either A. randomly pulled out of the database if the user has not signed up / signed in, B. selected from the database based on the submitted search criteria if the user has signed up / signed in.

Relevant front-end for Step 1: Homepage, Signup, Signin. 

**Step 2:** User wants to conduct a search and has not signed up yet. On form submission, user information is saved to the database. Authentification once user has signed up and wishes to sign in for full search access is implemented with the help of tokens. 

Relevant front-end for Step 2: Signup, Signin, Homepage.

**Step 3:** User wants to conduct a search and has signed up and signed in. Search can be conducted according to location (required) and items. Items are retrieved from the database according to submitted queries. Items can be added to the cart (another view). 

Relevant front-end for Step 3: Homepage, Cart. 

**Step 4:** User goes to the Cart where he has the option to A. checkout, and / or B. delete items from the cart. 

Relevant front-end for Step 4: Cart. 

**Step 5:** Each user has a Profile which displays the items he is A. renting, and / or B. hs put up for renting. 

Relevant front-end for Step 5: Profile. 


## To run the application

bower install is not required due to the way dependencies / lib are currently set up

npm install is required, jwt-simple installation should come with npm package