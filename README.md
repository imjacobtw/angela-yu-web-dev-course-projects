# Angela Yu's Web Developer Course Projects

This repository contains my project code from Dr. Angela Yu's Udemy course, [*The Complete Full-Stack Web Development Bootcamp*](https://www.udemy.com/course/the-complete-web-development-bootcamp/).

## Technologies Learned

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- Node.js
- Express
- EJS
- Git
- Axios
- RESTful APIs
- SQL
- PostgreSQL
- Passport
- React
- ...and many more.

## Project List

- [x] [Movie Ranking](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/movie-ranking)
- [x] [Birthday Invite](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/birthday-invite)
- [x] [Portfolio](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/portfolio-website)
- [x] [Online Resume](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/online-resume)
- [x] [Color Vocab](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/color-vocab)
- [x] [Motivational Meme Poster](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/motivational-meme-poster)
- [x] [Laos Flag](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/laos-flag)
- [x] [Web Design Agency](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/web-design-agency)
- [ ] Pricing Table
- [ ] Mondrian Painting
- [ ] TinDog Startup Website
- [ ] Hotel Website Design
- [ ] Personal Website
- [ ] The Dicee Game
- [ ] Drum Kit
- [ ] The Simon Game
- [x] [QR Code Generator](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/qr-code-generator)
- [x] [Secrets Access](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/secrets-access)
- [x] [Band Name Generator](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/band-generator)
- [x] [Blog Web Application](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/blog-web-app)
- [x] [Secrets](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/secrets)
- [ ] Use a Public API
- [x] [Blog REST API](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/blog-rest-api)
- [x] [Permalist](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/permalist)
- [x] [Book Notes](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/book-notes)
- [x] [Secrets Access with Authentication](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/secrets-access-with-auth)
- [x] [Keeper App](https://github.com/imjacobtw/angela-yu-web-dev-course-projects/tree/main/keeper-app)

## Information for Node.js Projects

Projects that use Node.js will require you to run `npm install` before you are able to run them on your machine. If you are unsure whether a project uses Node.js or not, check for a `package.json` file in the project directory. After you have installed all of the dependencies, run `node index.js` to start the application. The Keeper App project uses Vite as a build tool, so you must run `npm run dev` to start Vite's development server.

I have used the [dotenv](https://www.npmjs.com/package/dotenv) third-party Node.js package to store sensitive information in environment variables, such as passwords, Postgres connection URIs, and Google OAuth credentials. For projects that require such information, create a `.env` file in that project's directory with environment variables that match the name of the `process.env.VariableName` variables in the project code.

## Showcase

### Book Notes

#### Summary
A web application for storing information on previously read books, such as summary notes, their ratings, and when the books were read. 

#### Goals
- Fetch data from public RESTful APIs using Axios.
- Learn how to integrate a PostgreSQL database with the server.
- Practice creating SQL queries for CRUD operations.

#### Technologies
- JavaScript
- Node.js
- Express
- EJS
- Axios
- RESTful APIs
- SQL
- PostgreSQL

### Secrets Access with Authentication

#### 
A web application for securely storing secrets of users. Users have the option of logging in using their Google Account.

#### Goals
- Learn how to securely store passwords with PostgreSQL and bcrypt.
- Understand how to manage cookies and sessions for users.
- Add third-party login capabilities using Google OAuth and Passport.

#### Technologies
- JavaScript
- Node.js
- Express
- EJS
- SQL
- PostgreSQL
- Passport

### Blog REST API

#### Summary
A RESTful API that can be used to create, read, update, or delete blogs from a web server that stores blog data in-memory.

#### Goals
- Learn how to build a RESTful API.
- Reinforce Node.js and Express concepts.

#### Technologies
- JavaScript
- Node.js
- Express
- RESTful APIs
