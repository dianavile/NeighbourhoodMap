# Project 8 NeighbourhoodMap 	
NeighbourhoodMap is a Single Page Application (SPA) with a Google Map api and Foursquare api created in React.
This project is the last project (CAPSTONE project 8) of the Udacity Full Nanodegree Program Front-End Web Development.

![neighborhoodmap](https://github.com/dianavile/NeighbourhoodMap/blob/master/Neighbourhoodmap.png)

Setting Up
=================
## Installation Create React App
To start using this project follow these steps:
* Git clone this [repository](https://github.com/dianavile/Neighbourhoodmap.git) or download as .zip file
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To install: 

1) Create a new folder/repo with the name of the project "neighbourhoodmap"
2) Install the Create React App from [Create React App](https://github.com/facebook/create-react-app),
using the below code comments in the Terminal.
```
npx create-react-app neighbourhoodmap
cd neighbourhoodmap
npm fix audit (*there is a security issue, you can fix it using this code)
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
```
└── src
    ├── Header.css
    ├── Map.js
    ├── MapStyle.json
    ├── Locations.js
    ├── SideBar.js
    ├── Footer.js
```

Deploying
=================
To deploy the neighbourhoopmap project, use the following command in your Terminal:

### `npm run build`
This comment builds the app for production to the `build` folder.<br>
It bundles React in production mode and optimizes the build for the best performance in a minified version.
More information about [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### #Service Worker
`Create React App`includes a service worker, by default. 
To enable it, the application needs to be runned in production build mode, with `npm run build` as described above, followed by:
* cd into the build directory
* `npm install -g serve` (to install static server in terminal).
* `serve -s build`  (to run it from terminal).
* localhost:5000 (to visit the project offline with the service worker)

## Browser requirements
The minimum default set of browsers for this project are:
```
"browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
```
This means, the project is available on most default browsers, except on: Internet Explorer < 11 and opera_mini.
More info on [changing default browsers](https://github.com/lukeed/pwa/issues/48)

## Dependencies
This project is build with the following dependencies:

#### Dev dependencies (npm packages)
To install all development dependencies, check the provided links:
- [Create React App](https://github.com/facebook/create-react-app)
- [React v 16.5.2](https://www.npmjs.com/package/react/v/16.5.2)  
- [React-dom v 16.5.2](https://www.npmjs.com/package/react-dom/v/16.5.2) 
- [React-google-maps v 9.4.5](https://www.npmjs.com/package/react-google-maps)
- [React-scripts v 2.1.1](https://www.npmjs.com/package/react-scripts)

##### API
* [Google Maps API](https://cloud.google.com/maps-platform/)
* [Foursquare API](https://developer.foursquare.com/)

#### Design
* [Google Fonts](https://fonts.google.com/)

Version
=================
#### "version": "0.1.0" 
This is the first piece of version information, coded from scratch.

__Know bugs__
working hard to get rid of the bugs.

Contributors
=================
As this project is part of a official FrontEnd Nanodegree curriculum, no contributors are allowed.

License
=================
This project is distributed under the MIT licence.  See ``LICENSE`` for more information.

Code References
=================
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [Writing READMEs. Udacity](https://classroom.udacity.com/courses/ud777/)
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation/)
- [Google Maps JS API v3 - Simple Multiple Marker Example](https://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example)
- [Foursquare Developers Documentation](https://developer.foursquare.com/docs)
- [React documentation](https://reactjs.org/).
- [W3school- Sidebar](https://www.w3schools.com/w3css/w3css_sidebar.asp)
