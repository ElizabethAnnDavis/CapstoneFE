# Capstone - Frontend: React Web Application [MeLikeey](https://melikeey.onrender.com) ✔


This code is the frontend of this web app. It runs in tandium with the [Backend](https://github.com/ElizabethAnnDavis/CapstoneBE).


## Technologies

- **Vite:** Vite is a build tool for JavaScript that enables developers to build web applications more quickly and efficiently.
- **React:** React is a JavaScript library used for building user interfaces, especially for single-page applications where content updates dynamically without the need for full page reloads. It enables developers to create reusable UI components, manage application state effectively, and render DOM changes efficiently.
- **JavaScript:** JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.
- **CSS3:** Cascading Style Sheets (CSS) is a stylesheet language that defines the presentation of a document written in HTML
- **Fetch API:** The Fetch API is a JavaScript interface that allows you to send requests to servers and handle their responses.


## Approach

- **Seperation of Concerns:** Code broken apart in to many files, each containing small working pieces which are connected together to form the final product.


## Features

- **Multiple Pages:** This web app consists on four seperate pages of interactive content
- **Full CRUD operations:** This app allows for a user to interact with the `MongoDB` database to preform create, read, update, and delete actions.
- **Image Carousel:** The homepage features a rotating carousel with images that users can click to add to their favorites.


## Instructions

- **Clone Repo:** clone [this repo](https://github.com/ElizabethAnnDavis/CapstoneFE)
- **Store Data:** in a `.env` file, create a variables as followes: 
- **Necessary Installs:** run `npm install`, `npm install react`, `npm install react-cookie`, `npm install react-dom`, `npm install react-router-dom`
- **Run Program:** run `npm run dev` to launch this web app
- **The [backend](https://github.com/ElizabethAnnDavis/CapstoneBE) code is require**



## Files

- **App.jsx:** 

- **components:** 
- **Caption** 
- **CommentsSection** 
- **FavImgs** 
- **FavImgsContainer** 
- **Image** 
- **ImageContainer** 
- **LoginForm** 
- **LogoutBtn** 
- **Navbar** 
- **PostsSection** 
- **ProfileBio** 
- **ProtectedRoutes** 
- **SignUpForm** 
- **Title** 

- **context:** Auth AppProvider.jsx
- **Auth:** UserProvider.jsx
- **UserProvider.jsx:** 
- **AppProvider.jsx:** 

- **data:** apiData.js
- **apiData.js:** 

- **pages:** 
- **DetailsPage:** 
- **DetailsPage.css:** 
- **DetailsPage.jsx:** 
- **ProfilePage:** 
- **ProfilePage.css:** 
- **ProfilePage.jsx:** 
- **HomePage.jsx:** 
- **LoginPage.jsx:** 


## Credits

Thanks to **Dylan Comeau** for providing the basis for the authorization code used in the project.




### Requirements:
**(20%) Project Structure, Standardization, and Convention**
*  ✔   2%  --> Project is organized into appropriate files and directories, following best practices.
*    
*  ✔   2%  --> Project contains an appropriate level of comments.
*    
*  ✔   5%  --> Project is pushed to GitHub, and contains a README file that documents the project, including an overall description of the project.
*    
*  ✔   2%  --> Standard naming conventions are used throughout the project.
*    
*  ✔   4%  --> Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
*    
*  ✔   5%  --> Level of effort displayed in creativity, presentation, and user experience.
*    
**(12%) Core JavaScript**
*  ✔   2%  --> Demonstrate proper usage of ES6 syntax and tools.
*    
*  ✔   2%  --> Use functions and classes to adhere to the DRY principle. -don't have to do?
*    
*  ✔   2%  --> Use Promises and async/await, where appropriate.
*    
*  ✔   2%  --> Use Axios or fetch to retrieve data from an API.
*    
*  ✔   2%  --> Use sound programming logic throughout the application.
*    
*  ✔   2%  --> Use appropriate exception handling.
* 
**(9%) Database**
*  ✔   5%  --> Use MongoDB to create a database for your application.
*    
*  ✔   2%  --> Apply appropriate indexes to your database collections.
*    
*  ✔   2%  --> Create reasonable schemas for your data by following data modeling best practices.
*    
**(19%) Server**
*  ✔   7%  --> Create a RESTful API using Node and Express.
        -  For the purposes of this project, you may forgo the HATEOAS aspect of REST APIs.
*    
*  ✔   5%  --> Include API routes for all four CRUD operations.
*    
*  ✔   5%  --> Utilize the native MongoDB driver or Mongoose to interface with your database.
* 
**(35%) Front-End Development**
*  ✔  10%  --> Use React to create the application’s front-end.
*    
*  ✔   5%  --> Use CSS to style the application.
*    
*  ✔   5%  --> Create at least four different views or pages for the application.
*    
*  ✔   5%  --> Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering.
*    
*  ✔   5%  --> Use React Hooks or Redux for application state management.
*    
*  ✔   5%  --> Interface directly with the server and API that you created.
* 
**(5%) Presentation**
*  -   1%  --> Create a short overview of your application.
*    
*  -   1%  --> Highlight the use cases of your application.
*    
*  -   1%  --> Highlight the technical functionality of the application, from a high-level perspective.
*    
*  -   1%  --> Discuss what you have learned through the development of the application.
*    
*  -   1%  --> Discuss additional features that could be added to the application in the future.
* 
**(6%) Extra Credit**
*  ✔   2%  --> Include at least one form of user authentication/authorization within the application.
*    
*  ✔   1%  --> Deploy your project.
*    
*  -   3%  --> Build your application primarily with TypeScript.