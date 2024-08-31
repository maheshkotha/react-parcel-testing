# react-parcel-testing
- create src floder with 
- index.html --> connect script file(App.js) and style file(styles.css)
- App.js
- styles.css

* npm init
  - package.json file created
  - Install react, react-dom
  - Install parce for bundler, liveserver...
  - run the application using npm start
  - config package.json "script": {"start": "src/index.html -p 3333", "test": "jest"}
  

# Configure for Testing.
- Install jest


- - run the command `npm run test`
      `
            No tests found, exiting with code 1
          Run with `--passWithNoTests` to exit with code 0
          In /Users/mahesh.kotha/Desktop/Mahesh/Applications/react-parcel-testing
            6 files checked.
            testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
            testPathIgnorePatterns: /node_modules/ - 6 matches
            testRegex:  - 0 matches
          Pattern:  - 0 matches
      `
  


# Create Sample js test
  - we are add sample js function test it throw error, because babel conflicts are occer, we resolve babel configuration for(parce and jest)

  - Install babel-jest @babel/core, @babel/preset-env
  - create file in root folder, babel.config.js for configuration --> for javascript 

   ### Babel Configuration for Jest

Create a `babel.config.js` file in the root directory and add the following configuration:


```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {runtime: 'automatic'}]
  ],
};
```
- Install @babel/preset-react


- crate file in root folder, .parcelrc for configuration --> for react
- - below code get from parce document resolve conflict for using babel
```javascript
  {
    "extends": "@parcel/config-default",
    "transformers": {
      "*.{js,mjs,jsx,cjs,ts,tsx}": [
        "@parcel/transformer-js",
        "@parcel/transformer-react-refresh-wrap"
      ]
    }
  }
```


# Configure React Componets Test

- Enable for JSX
- Install @testing-library/react, @testing-library/dom, @testing-library/jest-dom

- jest configuration --> npx jest --init
- If you are using jest 28 or later jest-environment-jsdom package now must be installed separately.

- Install jest-environment-jsdom



********************* ===================== *******************************
********************* ===================== *******************************

# Group the Test in Perticular Component 
- using describe
