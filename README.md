# photo-viewer

## Description
Photo-Vue is an app that searches through the Unsplash API to find images that match the search criteria you enter. When you type in a subject and hit enter, Photo-Vue will load the first 10 images at a time in a rotating carousel. From there you have the option to load the next 10 images in that category as long as there are more, or search form a new criteria. The goal of this app was to learn and build a functional app with a new framework, Vue.js, in 4 days. Since Unsplash has some amazing pictures, I didn't want to take away from the view so I thought a minimalistic design would be a cool idea. I used mostly the Google home page for inspiration with the single search bar and search button.

## Installation
1) Start off with cloning down this repo
2) run ```npm install```
3) create a ```.env``` file
4) copy and paste this code into the .env file ```export const accessKey = ```
5) sign up with Unsplash to get an API key https://unsplash.com/developers
6) paste the access key as a string into the const accessKey in the .env file
7) run ```npm run serve``` and I recommend searching ```mountain``` but other than that, have fun!

## Demo

![Home page](https://github.com/Nathan-Froeh/photo-vue/blob/master/src/assets/Home.png)
![Search page example](https://github.com/Nathan-Froeh/photo-vue/blob/master/src/assets/Search.png)

## Tech used
Vue.js for the first time<br/>
Unsplash API<br/>
vue-carousel npm
