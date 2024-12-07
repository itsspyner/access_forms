# Resume Manager API
**This project provides a simple signup, login and reset password form using fetch api for api request and express.js for api response, 
mysql for database interaction and live server for hosting the web pages.**

## Features
- Easy to use 
- Signup, login and reset password through GUI.
- Uses fetch api for api requests and express.js for api response.
- Uses mysql database to store data.
- use live server for hosting the web pages.

## Technologies Used
- Node.js
- Express.js
- MYSQL2
- body-parser
- Streams
- Live server
- fetch api
- Cross-Origin Resource Sharing (CORS)

## Overview
- the index.js file is the main file that contains all the code for processing the data provided by user and inserting into data base allowing user to signup, login and reset password.
- signup means creating new account, login means accessing the existing account and reset password.
- It uses mysql database for storing the user data (that are: id, email, username, password).
- It uses fetch api for api requests from the front-end and express.js form backend for processing those requests.
- The view folder contains the html and css file for the web pages login, signup and reset password.

## Overview of files
- index.js => It is the main file that send api requests and get responses.
- views/login.html => Contains the code for login webpage and sending data from frontend to backend.
- views/signup.html => Contains the code for signup webpage and sending data from frontend to backend.
- views/resetPassword.html => Contains the code for reset password webpage and sending data from frontend to backend.
- views/login.css => Contains the css code for login webpage.
- views/signup.css => Contains the css code for signup webpage.
- views/resetPassword.css => Contains the css code for reset password webpage.
- package.json => Cntains the information about the library used in the development.

## prerequisites before cloning the repo
- Before running the program you must have created a database using mysql.
- run the following code once entered mysql cmd using **_mysql -u root -p_** then enter your password for entering root.
- once entered mysql cmd run **_create database signup;_** then run **_use signup_**
- once it shows database changed run following lines of code
- **_create table data(id INT AUTO_INCREMENT PRIMARY KEY,email VARCHAR(30), username VARCHAR(30), password VARCHAR(30));_**
- Now you are set to run the main program.

## Installation
- git clone https://github.com/itsspyner/access_forms.git
- cd access_forms
- npm install

## Implementation
- run node index.js in vs code terminal and its should say "Listening on port 3000" and "connected successfully".
- Then head to any web page you like to run(i.e login, signup or resetPassword) and right click and click on open with live server.
- Then just fill in the form and press submit to do the task of your choice.
