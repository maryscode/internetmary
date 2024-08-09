# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\


## Deployment
**Auto Deployment is set up with Hostinger**

When changes are committed to the Master branch, `.github/workflows/publish.yml` action will:
1. Run a build step
2. Push /build to `build` branch of same repo

Hostinger is set up to auto deploy the contents of /build directory to the root (i.e. /public_html) directory.

Set up is based on the following resources:
[Publish Sub-directory Action](https://github.com/s0/git-publish-subdir-action)

[Create Deployment Pipeline for React App on Hostinger](https://dev.to/mwoodson11/create-deployment-pipeline-for-react-app-on-hostinger-5bc9)


