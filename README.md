# Angela Yu's Web Developer Course Projects

This repository contains my project code from Dr. Angela Yu's Udemy course, [*The Complete Full-Stack Web Development Bootcamp*](https://www.udemy.com/course/the-complete-web-development-bootcamp/). Each project directory name corresponds with the name of the project in the course. 

## Technologies Learned

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- React
- Node.js
- Express
- EJS
- Axios
- RESTful APIs
- SQL
- PostgreSQL
- Git
- ...and many more.

## Project List

- Movie Ranking
- Birthday Invite
- Portfolio Website
- Online Resume
- Color Vocab Website
- Motivational Poster Website
- CSS Flag
- Web Design Agency Website
- Pricing Table
- Mondrian Painting
- TinDog Startup Website
- Hotel Website Design
- Personal Website
- The Dicee Game
- Drum Kit
- The Simon Game
- QR Code Generator
- Secrets Access
- Band Name Generator
- Blog Web Application
- Secrets
- Use a Public API
- Blog REST API
- Permalist
- Secrets Access with Authentication
- Keeper App

## Information for Node.js Projects

Projects that use Node.js will require you to run `npm install` before you are able to run them on your machine. If you are unsure whether a project uses Node.js or not, check for a `package.json` file in the project directory. After you have installed all of the dependencies, run `node index.js` to start the application. The Keeper App project uses Vite as a build tool, so you must run `npm run dev` to start Vite's development server.

I have used the [dotenv](https://www.npmjs.com/package/dotenv) third-party Node.js package to store sensitive information in environment variables, such as passwords, Postgres connection URIs, and Google OAuth credentials. For projects that require such information, create a `.env` file in that project's directory with environment variables that match the name of the `process.env.VariableName` variables in the project code.