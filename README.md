# 🥳 Fun with images 🥳

## Preview
https://tomkiworld.github.io/fun-with-images/

## Usage
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The server configuration for this App is [Fun with images API](https://github.com/TomKiWorld/fun-with-images-api) project.
- This App connects to the [Clarifai](https://www.clarifai.com/) API and detects colors and faces in images.
- Sets a JWT Token in local session and Redis to manage sessions and Authorization to access database. 

You can register, login, view, update and delete your profile.

You have the option to log in as ***Visitor*** (See comment below), in this case you will not have the option to edit or delete your profile.

### This APP DOES NOT:

- **Use cookies:** Any cookies placed might come from submmited urls.
- **Use emails for any purpose:** nor does it validate the email exists, it does make sure the email is unique, so if you register with *test@gmail.com* it could be this email address is already taken.

## Important to know
Just run npm install and make sure to clone the [fun-with-images-api](https://github.com/TomKiWorld/fun-with-images-api) repository including the node server and instructions for the database.

Without the server and database the app will not work, you will not be able to login, register, view your profile etc.

**Most importent:** Once you have established a databse connection, **create the visitor account** which is mendetory for the 'Log in as visitor' Button on the login page! If you use the docker command in the server repo the database will be ready to use.

## Available Scripts as common in React Apps

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser (This port might change if you have another App running on port 3000).

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `npm run deploy`
To deploy to Github pages

### `npm run cover`
To check test coverage

### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
