# MyReads Project

The project is called “Chirper”. Tis is a practise project for Redux from React Project from Udacity Nanodegrees. Building this simple Twitter clone will help us to practice improving the predictability of an application's state; establishing strict rules for getting, listening, and updating the store; and identifying what state should live inside of Redux and what state should live inside of React components.

## Start of the application

To get started simply run the following commands:

* install all project dependencies with `npm install`
* redux: `npm install redux`
* react-redux: `npm install  react-redux`
* thunk: `npm install  redux-thunk`
* start the development server with `npm start`

## Code base
```bash
├── README.md - This file.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon
│   └── index.html #Central html file which is the anchor for the React app
└── src
    ├── containers # Container folder for all dummed files. 
    │   ├── App.js # This is the root of the app.
    │   ├── Dashboard.js
    │   ├── NewTweet.js.js
    │   ├── Tweet.js
    │   └── Nav.js
    ├── actions # Holding all action files. 
    │   ├── authedUser.js
    │   ├── shared.js
    │   ├── user.js
    │   └── tweet.js
    ├── reducers # Holding reducers fiels. 
    │   ├── authedUsers.js
    │   ├── index.js
    │   ├── tweet.js
    │   └── users.js
    ├── constants # Holding all constants for project. 
    │   └── actionTypes.js
    ├── store # Holding store file. 
    │   └── index.js
    ├── utils # Holding backend files. 
    │   ├── _DATA.js_
    │   ├── api.js
    │   └── helpers.js
    ├── icons # Images for the app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    |── index.js # used for DOM rendering 
```
