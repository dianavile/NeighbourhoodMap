Project 8  
================= 
# NeighbourhoodMap	
NeighbourhoodMap is a Single Page Application (SPA) with a Google Map api and Foursquare api created in React.
This project is the last project (CAPSTONE project 8) of the Udacity Full Nanodegree Program Front-End Web Development.

Setting Up
=================
## Install Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To install the Create React App from Facebook, I did the following: 

1) Create a new folder/repo with the name of the project "neighbourhoodmap"
2) Install the Create React App from [Create React App](https://github.com/facebook/create-react-app),
using the below code comments in the Terminal.
```
npx create-react-app neighbourhoodmap
cd neighbourhoodmap
npm start
```
3) As seen above, I have chosen for __npx__ 
Yet, there are alternative ways to create a new app. 
To create a new app, you can choose one of the following three methods:

METHOD 1: __npx__
`npx create-react-app my-app` (npx comes with npm 5.2+ and higher, see instructions for older npm versions)

METHOD 2:__npm__
`npm init react-app my-app` (npm init <initializer> is available in npm 6+)

METHOD 3:__Yarn__
`yarn create react-app my-app` (yarn create is available in Yarn 0.25+)

Running any of these commands creates a start directory called inside the current folder. 

## Start the project directory 
- Add `npm start` in the Terminal (as explained above), to __run the app in the development mode__.
- Open [http://localhost:3000](http://localhost:3000) to __view the app in the browser__.
  The page will automatically reload if you make edits. You can see any lint errors in the console.
Inside the __project directory__, it will generate the initial project structure and install the dependencies:
```
neighbourhoodmap
├── README.md
├── package.json (=here all dependencies will be installed.)
├── .gitignore (=file to instruct which files need to be ignored at production).
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```
## React Components
The Neighbourhoodmap app contains the following __components__:
└── src
    ├── Header.css
    ├── Map.js
    ├── MapStyle.json
    ├── Locations.js
    ├── SideBar.js
    ├── Footer.js

Deploying
=================
Explain how to deploy this project. 
Maybe minimum computer specifications or browser requirements 

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Version History
=================
#### 0.0.0
- This is the first piece of version information.

## Learn React
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
