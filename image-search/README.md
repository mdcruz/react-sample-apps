# ReactSplash App (Image Search using unsplash API and react-photo-gallery)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This is an example React app from Stephen Grider's [Modern React with Redux](https://www.udemy.com/course/react-redux/) udemy course.

The app uses the unsplash API to get photos based on a search term. The first time the image list component renders, it will display the recent photos uploaded in unsplash. The images will then be updated when you type in a search term and click enter.
In order to get images from unsplash API, the `REACT_APP_UNSPLASH_API_KEY` must be exported either on the terminal or by creating a `.env` file on the root folder.

## Running the app

Run `npm start` and then visit `https://localhost:3000`

## Running the Cypress tests

On a separate tab, run `npm run cy:open` or `npm run cy:run`

## Applitools Sample tests

This repo shows an example on how to use Applitools with Cypress. To run the tests where it's using Applitools, please export the APPLITOOLS_API_KEY first prior to running the tests.
