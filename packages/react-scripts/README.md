# axilis-react-scripts

This package includes modified scripts and configuration from [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

## How to use it
```sh
create-react-app my-app --scripts-version @axilis/react-scripts
```
It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── config
        └── redux
            └── reducer.js
            └── store.js
        └── router
            └── history.js
    └── modules
        └── Home
            └── home.css
            └── index.js
            └── logo.svg
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── Layout.js
    └── registerServiceWorker.js
```

Once the installation is done, you can open your project folder and start application:
```sh
cd my-app/
npm start
```

## Features
Following features are preset in this project without needing to eject:
* Typescript support
* Sass support
* Less support
* Hot reload support
* Alias support
* Overridable options for paths
* Redux integration
* React router integration

To create your own configuration, modify `package.json` by adding `config` property.<br>
To override initial paths add `paths` property to `config`, where `paths` is an object that defines path overrides. <br>
To use aliases, add `aliases` property to `config`, in the same form as object for webpack config.

## Dependencies
Following dependencies will be installed when creating project:
* history
* prop-types
* react-hot-loader
* react-loadable
* react-router
* react-router-dom
* react-router-redux
* react-redux
* redux
* redux-devtools-extension
