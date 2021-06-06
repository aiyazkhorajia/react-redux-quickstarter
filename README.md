# React Quick Starter
## _React, Redux based application with authentication and listing module_


React Quick Starter is minimal setup to quick start any React based project, it has well designed directory structure, webpack configuration, HTTP request setup, Redux based state management.

Following are the functionalities and modules are used.
 - Redux, Redux-thunk
 - Authentication using JWT token,
 - React-Router(restricted routes)
 - Error Boundaries with fallback component
 - Lazy Loading on routes
 - Webpack5 and Babel configured with loaders and path alias
 - axios configuration with headers. 
 - Multiple environment friendly, separate env files.
 - EsLint & Prettier setup for code quality (AirBnB standards)
 - Scalable directory structure 


## Features

- SignIn/SignUp using email and password
- User listing with card based design
- Third party API integration
- Proper data fetching and error messages
- Drag and drop images (requires your Dropbox account be linked)
- SignOut
- Clean UI

## Directory Structure
📦src
 ┣ 📂assets
 ┃ ┣ 📂font
 ┃ ┗ 📂images
 ┣ 📂components
 ┃ ┣ 📜SignInForm.js
 ┃ ┗ 📜SignUpForm.js
 ┣ 📂helpers
 ┃ ┗ 📜axios.js
 ┣ 📂pages
 ┃ ┣ 📜SignIn.js
 ┃ ┗ 📜SignUp.js
 ┣ 📂store
 ┃ ┣ 📂actions
 ┃ ┃ ┣ 📜authActions.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┣ 📂reducers
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜signInReducer.js
 ┃ ┃ ┗ 📜signUpReducer.js
 ┃ ┣ 📜constants.js
 ┃ ┗ 📜index.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.html
 ┗ 📜index.js

## Tech

React Quick Starter uses a number of open source packages :

- [React](https://reactjs.org/) - React version 17.0.2
- [Redux](https://www.npmjs.com/package/redux) - Redux version 4.1.0 for state management.
- [React-router-dom](https://www.npmjs.com/package/react-router-dom) - Version 5.2.0 to navigate 
- [Axios](https://www.npmjs.com/package/axios) - Axios version 0.21.1 for http request.
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - Bootstrap version 5 for to create UI.
- [Webpack](https://webpack.js.org/) - Webpack version 5.38.1

And of React Quick Starter is open source with a [public repository](https://techdroom.com)
 on GitHub.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd react-redux-quickstarter
npm install
```

For development environments...

```sh
npm run start
```

For Production environments - it will generate a build on `build` directory

```sh
npm run prod
```
## Development

Want to contribute? Great!
You can email me on ayaz.khorajia@gmail.com

## License

MIT

**Free Software, Hell Yeah!**