# AngularJS + Typescript + Webpack + Gulp Seed 

Project is a seed AngularJS application. 
Features:
- Gulp manages running dependent tasks
- Handles [angular.module is not a function](https://github.com/webpack/webpack/issues/2049) issue with webpack via `exports-loader`.
- App code written in typescript 2.3.2
- Frontend dependencies are handled via bower
- Webpack 2 resolves bower_components
- Bundles separation into app and libraries

## Build and run the app
```
npm install
npm start
```
App should be available at http://localhost:8080