# Fitbit Dashboard Front-end

## Intro

React project based on an ejected create-react-app. Config changed to allow proxying to local node backend (running on 8080), and SASS support.

Uses React-router to handle routing within the app. Authorization is provided by Fitbit using OAuth2, this app uses the Authorization Code Grant Flow through a NodeJS/Express backend.

## Scripts

Usual create-react-app commands:

Dev build:

`npm run start`

Deploy:

`npm run build`

## Disclaimer

This project is work in progress. There is much functionality yet to be added, and refactoring of code. Some features I want to add are:

- Real time notifications to user using an SMS api, perhaps for updates during the week of progress vs average / benchmark
- More analysis, graphs, tables for data.
- Implement Web API subscriptions to ensure database holds most recent data
