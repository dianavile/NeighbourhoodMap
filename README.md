# NeighbourhoodMap	 
NeighbourhoodMap is a Single Page Application (SPA) with a Google Map api and Foursquare api created in React.
This project is the last project (CAPSTONE project 8) of the Udacity Full Nanodegree Program Front-End Web Development.

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

`npx create-react-app my-app`
(npx comes with npm 5.2+ and higher, see instructions for older npm versions)

METHOD 2:__npm__

`npm init react-app my-app`
npm init <initializer> is available in npm 6+

METHOD 3:__Yarn__

`yarn create react-app my-app`
yarn create is available in Yarn 0.25+

## Start Directory neighbourhood app
Running any of these commands creates a start directory called inside the current folder. 
Inside that directory, it will generate the initial project structure and install the dependencies:

```
neighbourhoodmap
├── README.md
├── (node_modules*) = this file will be created automatically after `npm install`, and is therefore not needed to upload here.  
├── package.json (=here all dependencies will be installed.)
├── .gitignore
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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
